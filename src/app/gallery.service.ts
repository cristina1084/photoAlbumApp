import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  addUser(user){
    return this.http.post("https://snapshots-server.herokuapp.com/signup", user);
  }

  checkUsernameEmail(user){
    return this.http.get("https://snapshots-server.herokuapp.com/signup/"+user['username']);
  }

  getUser(user){
    return this.http.post("https://snapshots-server.herokuapp.com/login", user);
  }

  addAlbum(album){
    return this.http.post("https://snapshots-server.herokuapp.com/album/addalbum", album);
  }

  getAlbums(user){
    return this.http.get("https://snapshots-server.herokuapp.com/album/getalbum/"+user);
  }

  deleteAlbum(user, album){
    return this.http.get("https://snapshots-server.herokuapp.com/album/deletealbum/"+user+"/"+album);
  }

  editAlbum(album){
    return this.http.post("https://snapshots-server.herokuapp.com/album/editalbum", album);
  }

  getPictures(user, album){
    return this.http.get("https://snapshots-server.herokuapp.com/picture/getpictures/"+user+"/"+album);
  }

  deletePicture(user, album, pname){
    return this.http.get("https://snapshots-server.herokuapp.com/picture/deletepicture/"+user+"/"+album+"/"+pname);
  }

  deletePictures(user, album){
    return this.http.get("https://snapshots-server.herokuapp.com/picture/deletepictures/"+user+"/"+album);
  }

  deleteAlbums(user){
    return this.http.get("https://snapshots-server.herokuapp.com/album/deletealbums/"+user);
  }
}
