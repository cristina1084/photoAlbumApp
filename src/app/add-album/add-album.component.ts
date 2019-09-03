import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from "primeng/api";

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  albumName: String;
  albumDescription: String;
  constructor(public ref: DynamicDialogRef) { }

  ngOnInit() {
  }

  submitData(){
    console.log(this.albumName);
    console.log(this.albumDescription);
    this.ref.close(this.albumName);
    
    
  }
}
