import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";
import { FileUploader } from "ng2-file-upload";

const URL = 'http://localhost:8080/upload';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL});

  constructor(private http: HttpClient, private messageService: MessageService) { }

  ngOnInit() {
  }


  onUpload() {
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

}
