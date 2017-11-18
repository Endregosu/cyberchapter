import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//import {WebStorageModule, LocalStorageService} from "angular2-localstorage";




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CartComponent,
    ProductsComponent,
    MenuComponent,
    LoginDialogComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
 //   WebStorageModule

  ],
  providers: [
  //  LocalStorageService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
