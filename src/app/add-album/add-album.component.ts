import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from "primeng/api";
import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  albumName: String;
  albumDescription: String;
  constructor(public ref: DynamicDialogRef, private gallery: GalleryService) { }

  ngOnInit() {
  }

  submitData(){
    // console.log(this.albumName);
    // console.log(this.albumDescription);
    this.gallery.addAlbum({name:this.albumName, description:this.albumDescription}).subscribe();
    this.ref.close({name:this.albumName, description:this.albumDescription});
  }
}
