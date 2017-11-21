import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LocalstorageService } from './services/localstorage.service';
import { MainComponent } from './main/main.component';
import { UserService } from 'app/services/user.service';
import { SubmenuComponent } from './submenu/submenu.component';
import { CartService } from 'app/services/cart.service';

import { CartModule } from 'app/cart/cart.module';

import { HighLighter } from 'app/app.highlighter';
import { ProductsModule } from 'app/products/products.module';
import { FooterMenuComponent } from 'app/footermenu/footermenu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    LoginPageComponent,
    MainComponent,
    SubmenuComponent,
    FooterComponent,
    HighLighter,
    FooterMenuComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    CartModule,
    ProductsModule

  ],
  providers: [
    UserService,
    LocalstorageService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
