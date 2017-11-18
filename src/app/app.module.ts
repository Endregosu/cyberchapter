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




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CartComponent,
    ProductsComponent,
    MenuComponent,
    LoginDialogComponent,
    CartComponent,
    FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,

  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
