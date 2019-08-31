import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlbumComponent,
    AddPhotoComponent,
    GalleryComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
