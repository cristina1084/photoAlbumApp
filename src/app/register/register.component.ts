import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { GalleryService } from "../gallery.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user = {fullname:'', email:'', username: '', password: ''};
  alert:Boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private gallery: GalleryService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: [null, Validators.compose([Validators.required, Validators.pattern(/^[\.a-zA-Z ]+$/)])],
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }

  signup(){
    // console.log(this.user);
    if (this.registerForm.valid){
      this.gallery.checkUsernameEmail(this.user).subscribe(data=>{
        if(data['found']==true) this.alert = true;
        else {
          this.alert = false;
          this.gallery.addUser(this.user).subscribe();
          this.router.navigateByUrl("");
        }
      })
    }
  }
}
