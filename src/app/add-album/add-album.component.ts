import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from "primeng/api";
import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  albumName: String;
  albumDescription: String;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private gallery: GalleryService) { }

  ngOnInit() {
    if (this.config.data){
      this.albumName = this.config.data.albumName;
      this.albumDescription = this.config.data.albumDescription;
    }
  }

  submitData(){
    // console.log(this.albumName);
    // console.log(this.albumDescription);
    this.gallery.addAlbum({name:this.albumName, description:this.albumDescription}).subscribe();
    this.ref.close({name:this.albumName, description:this.albumDescription});
  }
}
