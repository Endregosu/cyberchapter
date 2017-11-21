import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'app/products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { ForintPipe } from 'app/forint.pipe';
import { NameSearchPipe } from 'app/namesearch.pipe';
import { SingleProductComponent } from 'app/singleproduct/singleproduct.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProductsComponent,
    ForintPipe,
    NameSearchPipe,
    SingleProductComponent
  ]
})
export class ProductsModule { }
