import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LocalstorageService } from './services/localstorage.service';
import { MainComponent } from './main/main.component';
import { UserService } from 'app/services/user.service';
import { SubmenuComponent } from './submenu/submenu.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductsComponent,
    MenuComponent,
    LoginDialogComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    CheckoutComponent,
    LoginPageComponent,
    MainComponent,
    SubmenuComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes

  ],
  providers: [
    UserService,
    LocalstorageService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
