import { Component, OnInit } from '@angular/core';
import { Book } from 'app/book';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public bookList = [
    new Book(1, 'Hidegen hagy', 'A book about hidegen hagyás', 4200, './images/hidegenhagy.jpg'),
    new Book(2, 'Nyugtalanság', 'A book about nyugtalanság', 4000, './images/nyugtalansag.jpg'),
    new Book(3, 'Padtárskereső','A book about padtárskeresés', 5000, './images/padtarskereso.jpg'),
    new Book(4, 'Totális foci', 'A book about totális foci', 3000, './images/totalisfoci.jpg'),
  ]

  public cart = [];

  addToCart(book){
    this.cart.push(book);
    alert(book.name + " máris a kosaradban van köcsög!");
  }

  constructor() {

   }

  ngOnInit() {
  }

}
