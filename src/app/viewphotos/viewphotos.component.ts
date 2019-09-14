import { Component, OnInit } from '@angular/core';
import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-viewphotos',
  templateUrl: './viewphotos.component.html',
  styleUrls: ['./viewphotos.component.css']
})
export class ViewphotosComponent implements OnInit {

  constructor(private gallery: GalleryService) { }

  images = [];
  source;
  alt;
  title;

  ngOnInit() {
    this.gallery.getPictures().subscribe(data=>{
      console.log(data['length']);
      for (let index = 0; index < data['length']; index++) {
        this.source = "http://localhost:8080/view/"+data[index].filename;
        this.alt = 'Description for '+data[index].filename;
        this.title = data[index].filename;
        data[index]['source'] = this.source;
        data[index]['alt'] = this.alt;
        data[index]['title'] = this.title;
        this.images.push(data[index]);
        
      }
      console.log(this.images);
      
    })
  }

}
