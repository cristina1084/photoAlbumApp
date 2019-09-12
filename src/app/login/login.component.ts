import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credintials = {username:'', password:''};
  loginForm : FormGroup;
  alert: Boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private gallery: GalleryService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username : [null, Validators.required],
      password : [null, Validators.required]
    })
  }

  login(){
    console.log(this.credintials);
    this.gallery.getUser(this.credintials).subscribe(data=>{
      if (data['found'] == true){
        localStorage.setItem("Username",this.credintials['username'])
        this.router.navigateByUrl("/home/gallery");
      } 
      else {
        this.alert = true;
        this.router.navigateByUrl("");
      } 
    })
    
  }

}
