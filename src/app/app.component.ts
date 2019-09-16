import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhotoAlbumApp';

  mobileMenuActive: boolean;

  onMobileMenuButton (event: Event) {
    this.mobileMenuActive = !this.mobileMenuActive;
    event.preventDefault();
  }

  hideMobileMenu(event: Event) {
    this.mobileMenuActive = false;
    event.preventDefault();
  }
}
