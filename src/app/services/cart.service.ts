import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class CartService {
  private items = [];
  private numberOfItems : number = 0;
  private value : number;
  private books : string = "app/books.json"; //pretend to be on a server
  

  constructor(private _http: Http) { }

  getItems(){
    return this.items;
  }

  getBooksFromServer(){
    return this._http.get(this.books)
       .map((response:Response) => response.json());
  }

  getNumberOfItems(){
    return this.numberOfItems;
  }

  addItem(bookId : number){
      //put it in cart
      this.items.push(bookId);

      //lets incarse the number of items in cart
      this.numberOfItems ++;
  }

  deleteItem(bookId : number){

    //If there is at least 1 item in cart, lets decrase the number
    if(this.numberOfItems > 0) this.numberOfItems --;

    //Delete the given id from cart
    let indexOfBook = this.items.indexOf(bookId, 0);
    if (indexOfBook > -1) {
      this.items.splice(indexOfBook, 1);
    }
  }
}
