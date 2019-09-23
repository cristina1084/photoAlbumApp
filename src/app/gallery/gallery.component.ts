import { Component, OnInit } from '@angular/core';
import { DialogService, MessageService } from "primeng/api";
import { AddAlbumComponent } from "../add-album/add-album.component";
import { GalleryService } from "../gallery.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[DialogService, MessageService]
})
export class GalleryComponent implements OnInit {

  constructor(public dialogService: DialogService, public messageService: MessageService, private gallery: GalleryService, private router: Router) { }

  album;
  user = localStorage.getItem("Username");
  sortOptions = [];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  length;

  ngOnInit() {
    this.gallery.getAlbums(this.user).subscribe(data => {
      this.album = data;
      this.length = this.album.length;
      // console.log(this.album);
    });
    this.sortOptions = [
      {label: 'Name', value: 'name'}
    ];
  }

  addAlbum(){
    const ref = this.dialogService.open(AddAlbumComponent, {
      header: 'Add Album',
      width: '50%',
      contentStyle: {"max-height": "350px", "overflow": "auto"}
    });

    ref.onClose.subscribe((data) =>{
      if (data) {
        this.messageService.add({severity:'success', summary: 'Album Created', detail: data.name});
        this.router.navigateByUrl('/home/'+data.name+'/addphoto');
      }
    });
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

  deleteAllAlbums(){
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
  }

  onConfirm() {
    this.gallery.deleteAlbums(this.user).subscribe(data => this.album = data);
    this.messageService.clear('c');
    this.length=0;
  }

  onReject() {
    this.messageService.clear('c');
  }
}
