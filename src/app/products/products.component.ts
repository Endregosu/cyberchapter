import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { Router } from '@angular/router';
import { NameSearchPipe } from 'app/namesearch.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']      
  
})
export class ProductsComponent implements OnInit {
  books = [];
  users = [];
  column: string = 'title';

   constructor(private cartservice : CartService, private router : Router) {
   }

  ngOnInit() {
    this.cartservice.getBooksFromServer()
    .subscribe(resBooksData => this.books = resBooksData);
  }


  goToSingleProduct(id: number){
    this.router.navigate(['/singleproduct', id]);
  }

   addToCart(book){
    this.cartservice.addItem(book.id);
    alert(book.title + " a kosardban van :)");
  }

  deleteFromCart(book){
    this.cartservice.deleteItem(1);
  }

}
