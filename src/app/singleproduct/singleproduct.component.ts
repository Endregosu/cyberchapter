import { Component, OnInit, IterableDiffers, Input } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NameSearchPipe } from 'app/namesearch.pipe';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']      
  
})
export class SingleProductComponent implements OnInit {
  private sub: any;
  booksInShop: any;
  
  //Book info
  id: number;
  title: string;
  description: string;
  price: number;
  book: any;
  image: any;

  constructor(private route: ActivatedRoute, private cartservice: CartService,private router : Router) {
    this.cartservice.getBooksFromServer()
    .subscribe(resBooksData => this.booksInShop = resBooksData);
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
      });
  }

  ngDoCheck(){
    if(this.booksInShop != null){
      for (var i = 0; i < this.booksInShop.length; i++) {
        if (this.booksInShop[i].id == this.id){
            this.book = this.booksInShop[i];
            this.title = this.booksInShop[i].title;
            this.description = this.booksInShop[i].description;
            this.price = this.booksInShop[i].price;
            this.image = this.booksInShop[i].image;
        }
      }
      console.log(this.book);
    }
  }

  toProducts() {
    console.log("navigate");
    this.router.navigate(['.  /cart']);
  }

  addToCartById(id){
    this.cartservice.addItem(id);
    alert("Kosaradba helyezve");
  }
  
}
