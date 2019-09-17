import { Component, OnInit } from '@angular/core';
import { GalleryService } from "../gallery.service";
import { Image } from "../images";
import { ActivatedRoute, Router } from "@angular/router";
import { DialogService, MessageService } from "primeng/api";
import { AddAlbumComponent } from '../add-album/add-album.component';
import { MenuItem } from 'primeng/api';

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

    constructor(private gallery: GalleryService, private route: ActivatedRoute, public messageService: MessageService, private router: Router, public dialogService: DialogService,) { }

    ngOnInit() {
      this.selectedAlbum = this.route.snapshot.paramMap.get('albumid');

      this.gallery.getPictures(this.selectedAlbum).subscribe(data => this.images = data)

      this.sortOptions = [
          {label: 'Name', value: 'filename'},
          {label: 'Size', value: 'size'},
          {label: 'Type', value: 'mimetype'}
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
          command: () => {console.log(item);}
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
      this.gallery.deletePicture(pic.filename).subscribe(data => this.images = data)
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
        width: '70%',
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
      this.gallery.deleteAlbum(this.selectedAlbum).subscribe();
      this.messageService.clear('c');
      this.router.navigateByUrl("/home/gallery");
    }

    onReject() {
      this.messageService.clear('c');
    }

}
