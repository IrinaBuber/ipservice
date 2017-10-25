import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-ip-service',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }
}
