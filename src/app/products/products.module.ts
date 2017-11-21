import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'app/products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { ForintPipe } from 'app/forint.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsComponent,
    ForintPipe
  ]
})
export class ProductsModule { }
