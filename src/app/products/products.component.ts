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
    new Book(4, 'Aki bújt...', 'A book about bújócska', 2500, './images/akibujt.jpg'),
    new Book(5, 'Lány a jég alatt', 'A book about a lány a jég alatt', 3000, './images/lanyajegalatt.jpg'),
    new Book(6, 'Megúszós kaják', 'A book about megúszós kaják', 6000, './images/meguszoskajak.jpg'),
    new Book(7, 'A macskaherceg', 'A book about macskaherceg', 3000, './images/amacskaherceg.jpg'),
    new Book(8, 'A négy madár titka', 'A book about négy madár', 5300, './images/anegymadar.jpg'),
    new Book(9, 'Gesta hungarorum', 'A book about hungarorum', 3000, './images/gestahungarorum.jpg'),
    new Book(10, 'Rád hangolva', 'A book about rád hangolva', 2500, './images/radhangolva.jpg'),
    new Book(11, 'Evelyn két férje', 'A book about evelyn', 3000, './images/evelin.jpg'),
    new Book(12, 'Guiness rekordok könyve - 2018', 'A book about records', 3000, './images/guiness.jpg')
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
