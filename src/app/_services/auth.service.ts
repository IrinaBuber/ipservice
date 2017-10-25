import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  public isAuthenticated: boolean;
  public token: string;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isAuthenticated = currentUser && currentUser.token;
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post('/api/auth/login', {username: username, password: password})
      .map((response: Response) => {
        const token = response.json().data.token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          this.isAuthenticated = true;
          return true;
        } else {
          return false;
        }
      });
  }

  signup(username: string, password: string): Observable<boolean> {
    return this.http.post('/api/auth/signup', {username: username, password: password})
      .map((response: Response) => {
        const token = response.json().data.token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          this.isAuthenticated = true;
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('currentUser');
  }
}
