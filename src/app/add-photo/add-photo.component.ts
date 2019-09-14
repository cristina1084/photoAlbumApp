import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";
import { FileUploader } from "ng2-file-upload";
import { DomSanitizer } from '@angular/platform-browser';

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
  providers: [MessageService]
})
export class AddPhotoComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL});
  selectedFile;
  localImageUrl: any;
  
  constructor(private messageService: MessageService, public sanitizer:DomSanitizer) { }

  ngOnInit() {
  }


  onUpload() {
    for (let index = 0; index < this.uploader.queue.length; index++) {
      console.log(this.uploader.queue[index].file.name);
    }
    this.messageService.add({severity: 'success', summary: 'Successfully Uploaded', detail: ''});
  }

}
