import { Component, OnInit } from '@angular/core';
import { GalleryService } from "../gallery.service";
import { DialogService, MessageService } from "primeng/api";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[DialogService, MessageService]
})
export class ProfileComponent implements OnInit {

  constructor(private gallery: GalleryService, private messageService: MessageService, public datepipe: DatePipe) {
   }

  user = {fullname:'', email:'', username: '', password: '', dob: '', gender: ''};
  username = localStorage.getItem("Username");
  disabled: boolean = true;

  ngOnInit() {
    this.gallery.getUserDetails(this.username).subscribe(data => {
      this.user = data[0]; 
      this.user.dob = this.datepipe.transform(data[0].dob, "yyyy-MM-dd"); 
    });
  }

  saveDetails(){
    // console.log(this.user);
    this.gallery.saveUserDetails(this.user).subscribe(data => {
      this.user = data[0]; 
      this.user.dob = this.datepipe.transform(data[0].dob, "yyyy-MM-dd"); 
    });
    this.messageService.add({severity:'info', summary:'Success', detail:'Details Updated'});
    
  }

}
