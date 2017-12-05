import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthService} from "./services/auth.service";
import { RegisterComponent } from './pages/register/register.component';
import  {appRoutes} from './routes';
import {MaterialItemsModule} from "./MaterialItemsModule";
import { MenuComponent } from './components/menu/menu.component';
import { HelpComponent } from './pages/help/help.component';
import { ErrorComponent } from './pages/error/error.component';
import {RouteGuard} from "./route.guard";
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryService } from './services/category.service';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemService } from './services/item.service';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { CartListComponent } from './pages/cart-list/cart-list.component';
import { CartService } from './services/cart.service';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { OrderService } from './services/order.service';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { NewItemComponent } from './pages/new-item/new-item.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { Top10ListComponent } from './pages/top10-list/top10-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    HelpComponent,
    ErrorComponent,
    CategoryListComponent,
    ItemListComponent,
    ItemDetailComponent,
    CartListComponent,
    OrderFormComponent,
    OrderListComponent,
    OrderDetailComponent,
    NewItemComponent,
    NewCategoryComponent,
    Top10ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule
  ],
  providers: [AuthService, RouteGuard, CategoryService, ItemService, CartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
