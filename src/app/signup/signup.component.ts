import { Component, OnInit } from '@angular/core';

import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error = '';
  model: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  signup() {
    this.authService.signup();
  }
}
