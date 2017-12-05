import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import { HttpClient } from "@angular/common/http";
import {User} from "../model/User";
import {Role} from "../model/User";
import {Routes, Server} from "../utils/ServerRoutes";
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: User;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  login(user: User) {
    return this.http.post<User>(Server.routeTo(Routes.LOGIN), user);
  }

  register(user: User) {
    return this.http.post<User>(Server.routeTo(Routes.REGISTER), user);
  }

  logout() {
    return this.http.post(Server.routeTo(Routes.LOGOUT),this.user);
  }
}
