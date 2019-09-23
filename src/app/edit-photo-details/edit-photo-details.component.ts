import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from "primeng/api";
import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-edit-photo-details',
  templateUrl: './edit-photo-details.component.html',
  styleUrls: ['./edit-photo-details.component.css']
})
export class EditPhotoDetailsComponent implements OnInit {
  user = localStorage.getItem("Username");
  albumName: any;
  imageDescription: any;
  imageName: any;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private gallery: GalleryService) { }

  ngOnInit() {
    if (this.config.data){
      this.imageName = this.config.data.imageName;
      this.imageDescription = this.config.data.imageDescription;
    }
  }

  submitData(){
    this.ref.close({user:this.user, imgname:this.imageName,  description:this.imageDescription});
  }
}
