import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  user = localStorage.getItem("Username");

  canActivate(){
    if(!this.user){
      this.router.navigateByUrl("/");
      return false;
    }
    return true;
  }
}
