import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  addUser(user){
    return this.http.post("http://localhost:8080/signup", user);
  }

  checkUsernameEmail(user){
    return this.http.get("http://localhost:8080/signup/"+user['username']);
  }

  getUser(user){
    return this.http.post("http://localhost:8080/login", user);
  }
}
