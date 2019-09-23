import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";
import { FileUploader } from "ng2-file-upload";
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";

const URL = 'https://snapshots-server.herokuapp.com/picture/api/';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
  providers: [MessageService]
})
export class AddPhotoComponent implements OnInit {

  selectedFile;
  localImageUrl: any;
  selectedAlbum = this.route.snapshot.paramMap.get('albumid');
  user = localStorage.getItem("Username");
  public uploader:FileUploader = new FileUploader({url: URL+this.user+'/'+this.selectedAlbum});

  constructor(private messageService: MessageService, public sanitizer:DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  removePic(item){
    console.log(item);
    
  }
  onUpload() {
    this.messageService.add({severity: 'success', summary: 'Successfully Uploaded', detail: ''});
  }

}
