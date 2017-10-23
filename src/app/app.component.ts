import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="o-navbar">
      <nav class="c-nav">
          <a routerLink="/index" routerLinkActive="c-nav__link_active" class="c-nav__link">{{title}}</a>
          <a routerLink="/profile" routerLinkActive="c-nav__link_active" class="c-nav__link">Profile</a>
          <div class="c-nav_right">
            <a routerLink="/login" routerLinkActive="c-nav__link_active" class="c-nav__btn">Login</a>
            <a routerLink="/signup" routerLinkActive="c-nav__link_active" class="c-nav__btn">SignUp</a>
          </div>
      </nav>
    </div>
    <div class="o-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IP Service';
}
