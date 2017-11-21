import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserService } from 'app/services/user.service';
import { SubmenuComponent } from './submenu/submenu.component';
import { CartService } from 'app/services/cart.service';
import { CartComponent } from 'app/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartComponent,
    FooterComponent,
    SubmenuComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes

  ],
  providers: [
    UserService,
    CartService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
