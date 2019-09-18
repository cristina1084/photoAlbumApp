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
  user;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private gallery: GalleryService) { }

  ngOnInit() {
    this.user = localStorage.getItem("Username");
    if (this.config.data){
      this.albumName = this.config.data.albumName;
      this.albumDescription = this.config.data.albumDescription;
    }
  }

  submitData(){
    if (this.config.data){
      this.gallery.editAlbum({user:this.user, oldname:this.config.data.albumName, newname:this.albumName, description:this.albumDescription}).subscribe();
      this.ref.close({user:this.user, oldname:this.config.data.albumName, newname:this.albumName, description:this.albumDescription});
    }
    else{
      this.gallery.addAlbum({user:this.user, name:this.albumName, description:this.albumDescription}).subscribe();
      this.ref.close({user:this.user, name:this.albumName, description:this.albumDescription});
    }
  }
}
