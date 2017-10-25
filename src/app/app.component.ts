import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from './_services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="o-navbar" *ngIf="isAuthenticated">
      <nav class="c-nav">
        <a routerLink="/index" routerLinkActive="c-nav__link_active" class="c-nav__link">Dashboard</a>
        <a routerLink="/profile" routerLinkActive="c-nav__link_active" class="c-nav__link">Profile</a>
        <div class="c-nav_right">
          <button (click)="logout()" class="btn c-nav__btn">Logout</button>
        </div>
      </nav>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IP Service';
  isAuthenticated: boolean;

  constructor(private router: Router,
              private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

}
