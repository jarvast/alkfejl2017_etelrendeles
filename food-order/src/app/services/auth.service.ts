import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../model/User";
import {Routes, Server} from "../utils/ServerRoutes";
import { HttpClient } from '@angular/common/http/src/client';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  user: User;
  isLoggedIn: boolean = false;

  constructor(private http: Http) {
    this.user = new User();
  }

  login(user: User) {
    return this.http.post(Server.routeTo(Routes.LOGIN), user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res.json();
        return this.user;
      })
  }

  register(user: User) {
    return this.http.post(Server.routeTo(Routes.REGISTER), user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res.json();
        return this.user;
      })
  }

  logout() {
    return this.http.post(Server.routeTo(Routes.LOGOUT),this.user)
      .map(res => {
        this.user = new User();
        this.isLoggedIn = false;
      })
  }
}
