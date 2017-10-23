import { Component, OnInit } from '@angular/core';

import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})

export class AdminPageComponent implements OnInit {
  users: Array<any>;
  constructor(private _userService: UserService) {
    this._userService.getUsers()
      .subscribe(res => this.users = res);
  }

  ngOnInit() {
  }

}
