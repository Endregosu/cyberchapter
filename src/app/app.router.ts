import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { LoginPageComponent } from 'app/login-page/login-page.component';
import { MainComponent } from 'app/main/main.component';
import { SingleProductComponent } from 'app/singleproduct/singleproduct.component';


export const router: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'cart', component: CartComponent },
    { path: 'main', component: MainComponent },
    { path: 'products', component:  ProductsComponent },
    { path: 'loginpage', component: LoginPageComponent },
    {
        path: 'singleproduct/:id',
        component: SingleProductComponent
    }, 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);