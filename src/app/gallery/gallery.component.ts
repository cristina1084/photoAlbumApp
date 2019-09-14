import { Component, OnInit } from '@angular/core';
import { DialogService, MessageService } from "primeng/api";
import { AddAlbumComponent } from "../add-album/add-album.component";
import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[DialogService, MessageService]
})
export class GalleryComponent implements OnInit {

  constructor(public dialogService: DialogService, public messageService: MessageService, private gallery: GalleryService) { }

  album;

  ngOnInit() {
    this.gallery.getAlbums().subscribe(data=>{
      this.album = data;
    })
  }

  addAlbum(){
    const ref = this.dialogService.open(AddAlbumComponent, {
      header: 'Add Album',
      width: '70%',
      contentStyle: {"max-height": "350px", "overflow": "auto"}
    });

    ref.onClose.subscribe((data) =>{
      if (data) {
        this.messageService.add({severity:'success', summary: 'Album Created', detail: data.name});
      }
    });
  }
}
