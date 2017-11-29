import { Component, OnInit, KeyValueDiffers, Input, IterableDiffers } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { Router } from '@angular/router/src/router';
import { UserService } from 'app/services/user.service';

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


  constructor(private cartservice : CartService, differs: IterableDiffers, private router : Router, private user : UserService) {
    this.differ = differs.find([]).create(null);
  }

  ngOnInit() {
    this.cartservice.getBooksFromServer()
    .subscribe(resBooksData => this.booksInShop = resBooksData);

    this.books = this.cartservice.getItems();
  }

  ngDoCheck(){
    this.bookListWithDetails = [];
    const change = this.differ.diff(this.books);
      for(let book of this.books){
        for (var i = 0; i < this.booksInShop.length; i++) {
          if (this.booksInShop[i].id == book)
              this.bookListWithDetails.push(this.booksInShop[i]);
        }
      }
      
      //Sumvalue számolás
      this.sumvalue = 0;
      for(let item of this.bookListWithDetails){
        this.sumvalue += item.price;
      }
  }

  deleteItem(id : number){
    const index: number = this.books.indexOf(id);
    if (index !== -1) {
        this.books.splice(index, 1);
    }    
    let items = this.cartservice.getNumberOfItems();
    this.cartservice.setNumberOfItems(items-1);
  }

  toProducts() {
    this.router.navigate(['.  /products']);
  }

  checkout(){
    console.log(this.user.getUserLoggedIn());
      if(!this.user.getUserLoggedIn()){
        alert("Haver... nem is vagy bejelentkezve");
      } else {
        alert("Küldöm a cuccot!");
        // Send the data to the backend

        this.books = [];
        this.sumvalue = 0;
        this.cartservice.setNumberOfItems(0);
        this.bookListWithDetails = [];
      }
  }

}

