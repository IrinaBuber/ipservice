import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import {AuthService} from './auth.service';

@Injectable()
export class UserService {
  result: any;

  constructor(private _http: Http,
              private authService: AuthService) {
  }

  getUsers() {
    return this._http.get('/api/users')
      .map(result => this.result = result.json().data);
  }
}
