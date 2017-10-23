import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';

  // constructor(private router: Router,
  //             private authenticationService: AuthenticationService) {
  // }

  ngOnInit() {
  }
  login(): void {
  }
}
