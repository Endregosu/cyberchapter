import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';
import { LocalstorageService } from 'app/localstorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private user : UserService, private storageservice : LocalstorageService) {

   }

  ngOnInit() {

  }

}
