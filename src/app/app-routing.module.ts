import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAlbumComponent } from './add-album/add-album.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ViewphotosComponent } from './viewphotos/viewphotos.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"home", component:HomeComponent, children:[
    {path:"profile", component:ProfileComponent},
    {path:"gallery", component:GalleryComponent},
    {path:"addalbum", component:AddAlbumComponent},
    {path:":albumid/addphoto", component:AddPhotoComponent},
    {path:"gallery/:albumid/viewphotos", component:ViewphotosComponent}
  ]},  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
