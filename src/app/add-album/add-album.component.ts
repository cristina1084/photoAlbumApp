import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  albumName: String;
  albumDescription: String;
  constructor() { }

  ngOnInit() {
  }

  submitData(){
    console.log(this.albumName);
    console.log(this.albumDescription);
    
    
  }
}
