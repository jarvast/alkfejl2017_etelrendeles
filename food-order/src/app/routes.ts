import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {HelpComponent} from "./pages/help/help.component";
import {ErrorComponent} from "./pages/error/error.component";
import {Role} from "./model/User";
import {RouteGuard} from "./route.guard";
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { CartListComponent } from "./pages/cart-list/cart-list.component";
import { OrderFormComponent } from "./pages/order-form/order-form.component";
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { NewItemComponent } from './pages/new-item/new-item.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';

export const appRoutes: Routes = [
  {
    path: '',
    canActivateChild: [RouteGuard],
    children: [
      {path: '', redirectTo: 'help', pathMatch: 'full'},
      {path: 'login', component: LoginComponent, data: {roles: [Role.GUEST]}},
      {path: 'register', component: RegisterComponent, data: {roles: [Role.GUEST]}},
      {path: 'categories', component: CategoryListComponent, data: {roles: [Role.USER, Role.ADMIN, Role.GUEST]}},
      {path: 'cart', component: CartListComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'orderform', component: OrderFormComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'orders', component: OrderListComponent, data: {roles: [Role.ADMIN, Role.USER]}},
      {path: 'newitem', component: NewItemComponent, data: {roles: [Role.ADMIN]}},
      {path: 'newcategory', component: NewCategoryComponent, data: {roles: [Role.ADMIN]}},
      {path: 'categories/:id', component: ItemListComponent, data: {roles: [Role.USER, Role.ADMIN, Role.GUEST]}},
      {path: 'orders/:id', component: OrderDetailComponent, data: {roles: [Role.ADMIN, Role.USER]}},
      {path: 'categories/:catId/items/:id', component: ItemDetailComponent, data: {roles: [Role.USER, Role.ADMIN, Role.GUEST]}},
      {path: 'help', component: HelpComponent},
      {path: '**', component: ErrorComponent}
    ]
  }];
