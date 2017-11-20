import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from 'app/checkout/checkout.component';
import { LoginPageComponent } from 'app/login-page/login-page.component';
import { MainComponent } from 'app/main/main.component';


export const router: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'cart', component: CartComponent },
    { path: 'main', component: MainComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'loginpage', component: LoginPageComponent },
    { path: 'cart', component: CartComponent }
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);