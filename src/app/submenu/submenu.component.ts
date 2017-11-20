import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  constructor(private user : UserService, private cart : CartService ) {}

  ngOnInit() {
  }

}
