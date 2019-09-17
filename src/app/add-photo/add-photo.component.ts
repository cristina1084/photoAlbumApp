import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";
import { FileUploader } from "ng2-file-upload";
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";

const URL = 'http://localhost:8080/picture/api/';

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

  onUpload() {
    for (let index = 0; index < this.uploader.queue.length; index++) {
      console.log(this.uploader.queue[index].file.name);
    }
    this.messageService.add({severity: 'success', summary: 'Successfully Uploaded', detail: ''});
  }

}
