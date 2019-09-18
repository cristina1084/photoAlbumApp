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

  addAlbum(album){
    return this.http.post("http://localhost:8080/album/addalbum", album);
  }

  getAlbums(user){
    return this.http.get("http://localhost:8080/album/getalbum/"+user);
  }

  deleteAlbum(user, album){
    return this.http.get("http://localhost:8080/album/deletealbum/"+user+"/"+album);
  }

  editAlbum(album){
    return this.http.post("http://localhost:8080/album/editalbum", album);
  }

  getPictures(user, album){
    return this.http.get("http://localhost:8080/picture/getpictures/"+user+"/"+album);
  }

  deletePicture(user, album, pname){
    return this.http.get("http://localhost:8080/picture/deletepicture/"+user+"/"+album+"/"+pname);
  }

  deletePictures(user, album){
    return this.http.get("http://localhost:8080/picture/deletepictures/"+user+"/"+album);
  }

  deleteAlbums(user){
    return this.http.get("http://localhost:8080/album/deletealbums/"+user);
  }
}
