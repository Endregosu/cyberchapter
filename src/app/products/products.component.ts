import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  books = [];
  cart = [];
  users = [];

   constructor(private cartservice : CartService) {
   }

   ngOnInit() {
    this.cartservice.getBooksFromServer()
    .subscribe(resBooksData => this.books = resBooksData);
  }

   addToCart(book){
    this.cartservice.addItem(book.id);
    alert(book.name + " máris a kosaradban van köcsög!");
  }

  deleteFromCart(book){
    this.cartservice.deleteItem(1);
  }

}
