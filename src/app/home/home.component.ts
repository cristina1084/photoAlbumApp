import { Component, OnInit } from '@angular/core';
import { DialogService, MessageService } from "primeng/api";
import { AddAlbumComponent } from "../add-album/add-album.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DialogService, MessageService]
})
export class HomeComponent implements OnInit {

  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  ngOnInit() {
  }

  addAlbum(){
    
    const ref = this.dialogService.open(AddAlbumComponent, {
      header: 'Add Album',
      width: '70%',
      contentStyle: {"max-height": "350px", "overflow": "auto"}
    });

    ref.onClose.subscribe((data) =>{
      if (data) {
          console.log(data);
          this.messageService.add({severity:'success', summary: 'Album Created', detail: data});
      }
    });
  }

}
