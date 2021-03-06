import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FileUploadModule } from "ng2-file-upload";

import { AddAlbumComponent } from './add-album/add-album.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ViewphotosComponent } from './viewphotos/viewphotos.component';

import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { ToastModule } from "primeng/toast";
import { MessageModule } from 'primeng/message';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from "primeng/radiobutton";

import { GalleryService } from "./gallery.service";
import { ImagePreviewDirective } from './image-preview.directive';
import { AuthGuardService } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DatePipe } from '@angular/common';
import { EditPhotoDetailsComponent } from './edit-photo-details/edit-photo-details.component';

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
    RegisterComponent,
    SidebarComponent,
    ViewphotosComponent,
    ImagePreviewDirective,
    PageNotFoundComponent,
    EditPhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    SplitButtonModule,
    DialogModule,
    DynamicDialogModule,
    ToastModule,
    MessageModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    TooltipModule,
    TieredMenuModule,
    CalendarModule,
    RadioButtonModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [
    GalleryService, 
    AuthGuardService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
