import { Component, OnInit } from '@angular/core';
import { DialogService } from "primeng/api";
import { AddAlbumComponent } from "../add-album/add-album.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DialogService]
})
export class HomeComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

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
      }
    });
  }

}
