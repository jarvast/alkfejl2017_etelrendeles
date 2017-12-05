import {Component, OnInit} from '@angular/core';
import {User, Role} from "../../model/User";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private authService: AuthService, private router: Router, private cartService: CartService) {
  }

  ngOnInit() {
  }

  submit() {
    this.authService.register(new User(this.username.value, this.password.value, this.email.value)).subscribe(data => {
      this.authService.user = data;
      this.authService.isLoggedIn = true;
      if (this.authService.user.role===Role.ADMIN){
        this.authService.isAdmin = true;
      }
      this.cartService.deleteCart();
      this.router.navigate(['/categories']);
    },
    err => console.log(err));
  }

  get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }
}
