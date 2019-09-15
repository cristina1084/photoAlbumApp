import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public app: AppComponent, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("Username");
    this.router.navigateByUrl("");
  }
}
