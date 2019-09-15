import { Component, OnInit } from '@angular/core';
import { GalleryService } from "../gallery.service";
import { Image } from "../images";

@Component({
  selector: 'app-viewphotos',
  templateUrl: './viewphotos.component.html',
  styleUrls: ['./viewphotos.component.css']
})
export class ViewphotosComponent implements OnInit {

    displayDialog: boolean;

    sortOptions = [];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    images;

    selectedImage: Image;
    constructor(private gallery: GalleryService) { }

    ngOnInit() {
        this.gallery.getPictures().subscribe(data => {
          this.images = data
          console.log(this.images);
          
        })

        this.sortOptions = [
            {label: 'Name', value: 'filename'},
            {label: 'Size', value: 'size'},
            {label: 'Type', value: 'mimetype'}
        ];
    }

    selectImage(event: Event, pic: Image) {
        this.selectedImage = pic;
        console.log(this.selectedImage);
        
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

  /* 
  images = [];
  source;
  alt;
  title;
  thumbnail;

  ngOnInit() {
    this.gallery.getPictures().subscribe(data=>{
      console.log(data['length']);
      for (let index = 0; index < data['length']; index++) {
        this.source = "http://localhost:8080/view/"+data[index].filename;
        this.thumbnail = "http://localhost:8080/view/"+data[index].filename;
        this.title = data[index].filename;
        data[index]['source'] = this.source;
        data[index]['thumbnail'] = this.thumbnail;
        data[index]['title'] = this.title;
        this.images.push(data[index]);
        
      }
      console.log(this.images);
      
    })
  } */

}
