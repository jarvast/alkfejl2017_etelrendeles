import {Component, OnInit} from '@angular/core';
import {Role, User} from "../../model/User";
import {AuthService} from "../../services/auth.service";
import { Router, NavigationEnd } from '@angular/router';
import { CartService } from '../../services/cart.service';

interface MenuItem {
  link: String;
  title: String;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  private common: MenuItem[] = [
    {link: '/categories', title: 'Categories'}
  ];

  private roleMenus = new Map<String, MenuItem[]>([
    [Role.GUEST, [...this.common]],
    [Role.USER, [...this.common , {link: '/cart', title: 'My Cart'}, {link: '/orders', title: 'Orders'}]],
    [Role.ADMIN, [...this.common, {link: '/cart', title: 'My Cart'}, {link: '/orders', title: 'Orders'}]]
  ]);

  menus: MenuItem[];

  constructor(private authService: AuthService, private router: Router, private cartService: CartService) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setMenus()
      }
    })
  }
  setMenus() {
    if (this.authService.isLoggedIn) {
      this.menus = this.roleMenus.get(this.authService.user.role);
    } else {
      this.menus = this.roleMenus.get(Role.GUEST)
    }
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.authService.user = new User();
      this.authService.isAdmin = false;
      this.authService.isLoggedIn = false;
      this.router.navigate(['/login']);
    },
    err => err);
  }
}
