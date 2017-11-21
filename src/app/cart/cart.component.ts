import { Component, OnInit, KeyValueDiffers, Input, IterableDiffers } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  books = []; // books in cart (with IDs)
  booksInShop = [];
  bookListWithDetails = [];
  sumvalue = 0;

  @Input() datasource: Array<any> = [];
  differ: any;


  constructor(private cartservice : CartService, differs: IterableDiffers, private router : Router) {
    this.differ = differs.find([]).create(null);
  }

  ngOnInit() {
    this.cartservice.getBooksFromServer()
    .subscribe(resBooksData => this.booksInShop = resBooksData);

    this.books = this.cartservice.getItems();
  }

  ngDoCheck() {
    const change = this.differ.diff(this.books);
      for(let book of this.books){
        for (var i = 0; i < this.booksInShop.length; i++) {
          if (this.booksInShop[i].id == book)
              this.bookListWithDetails.push(this.booksInShop[i]);
        }
      }
      
      //Sumvalue számolás
      for(let item of this.bookListWithDetails){
        this.sumvalue += item.price;
      }
  }

  deleteItem(id : number){
    console.log(this.books);
    const index: number = this.books.indexOf(id);
    if (index !== -1) {
        this.books.splice(index, 1);
    }    
  }

}

