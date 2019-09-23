import { Component, OnInit } from '@angular/core';
import { GalleryService } from "../gallery.service";
import { Image } from "../images";
import { ActivatedRoute, Router } from "@angular/router";
import { DialogService, MessageService } from "primeng/api";
import { AddAlbumComponent } from '../add-album/add-album.component';
import { MenuItem } from 'primeng/api';
import { EditPhotoDetailsComponent } from '../edit-photo-details/edit-photo-details.component';

@Component({
  selector: 'app-viewphotos',
  templateUrl: './viewphotos.component.html',
  styleUrls: ['./viewphotos.component.css'],
  providers:[DialogService, MessageService]
})
export class ViewphotosComponent implements OnInit {

  displayDialog: boolean;
  sortOptions = [];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  images;
  selectedImage: Image;
  selectedAlbum;
  selectedAlbumDescription;
  items: MenuItem[];
  user = localStorage.getItem("Username");
  length;
  
  constructor(private gallery: GalleryService, private route: ActivatedRoute, public messageService: MessageService, private router: Router, public dialogService: DialogService,) { }

  ngOnInit() {
    this.selectedAlbum = this.route.snapshot.paramMap.get('albumid');

    this.gallery.getPictures(this.user, this.selectedAlbum).subscribe(data => {
      this.images = data;
      this.length = this.images.length;
      // console.log(this.images);
    })

    this.sortOptions = [
        {label: 'Name', value: 'title'},
        {label: 'Size', value: 'size'},
        {label: 'Type', value: 'mimetype'},
        {label: 'Filename', value:'filename'}
    ];

    this.gallery.getAlbums(this.user).subscribe(data=>{
      for (const d in data) {
        if (data.hasOwnProperty(d)) {
          if (data[d].name === this.selectedAlbum)
            this.selectedAlbumDescription = data[d].description;
        }
      }
    })
  }

  onClickMenu(item: any){
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        command: () => {this.editImageDetails(item);}
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
        command: () => {this.removePic(item);}
      }
    ];              
  }

  selectImage(event: Event, pic: Image) {
    this.selectedImage = pic;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;
    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedImage = null;
  }

  removePic(pic: Image){
    this.gallery.deletePicture(this.user, this.selectedAlbum, pic.filename).subscribe(data => this.images = data)
  }

  addNewPhoto(){
    this.router.navigateByUrl("/home/"+this.selectedAlbum+"/addphoto");
  }

  update() {
    const ref = this.dialogService.open(AddAlbumComponent, {
      data:{
        albumName : this.selectedAlbum,
        albumDescription: this.selectedAlbumDescription
      },
      header: 'Edit Album',
      width: '50%',
      contentStyle: {"max-height": "350px", "overflow": "auto"}
    });

    ref.onClose.subscribe((data) =>{
      if (data) {
        this.messageService.add({severity:'info', summary:'Success', detail:'Details Updated'});
        this.selectedAlbum = data.newname;
        this.selectedAlbumDescription = data.description;          
      }
    });
  }

  delete() {
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
  }

  onConfirm() {
    this.gallery.deleteAlbum(this.user,this.selectedAlbum).subscribe();
    this.messageService.clear('c');
    this.router.navigateByUrl("/home/gallery");
  }

  onReject() {
    this.messageService.clear('c');
  }

  deleteAllPictures(){
    this.messageService.add({key: 'pc', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
  }

  onConfirmP() {
    //this.gallery.deleteAlbum(this.selectedAlbum).subscribe();
    this.gallery.deletePictures(this.user, this.selectedAlbum).subscribe(data => this.images = data);
    this.length=0;
    this.messageService.clear('pc');
  }

  onRejectP() {
    this.messageService.clear('pc');
  }

  editImageDetails(image: Image){
    const ref = this.dialogService.open(EditPhotoDetailsComponent, {
      data:{
        imageName : image['title'],
        imageDescription: image['description']
      },
      header: 'Edit Image Details',
      width: '50%',
      contentStyle: {"max-height": "350px", "overflow": "auto"}
    });

    ref.onClose.subscribe((data) =>{
      if (data) {
        this.messageService.add({severity:'success', summary: 'Image details updated'});
        // console.log(data);
        this.gallery.editPictureDetails(
          {user: this.user, albname: this.selectedAlbum, filename: image.filename, title: data.imgname, description: data.description}
          ).subscribe(data => this.images = data);
      }
    });

  }
}
