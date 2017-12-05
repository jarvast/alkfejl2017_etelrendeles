import {Component, OnInit} from '@angular/core';
import {User, Role} from "../../model/User";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router, private cartService: CartService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  submit() {
    this.authService.login(new User(this.username.value, this.password.value)).subscribe(data => {
      this.authService.user = data;
      this.authService.isLoggedIn = true;
      if (this.authService.user.role===Role.ADMIN){
        this.authService.isAdmin = true;
      }
      this.cartService.deleteCart();
      this.router.navigate(['/categories']);
    },
    err => this.openSnackBar())
  }
  openSnackBar() {
    this.snackBar.open('Wrong username or password!','Got it!' ,{
      duration: 3000,
    });
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
}
