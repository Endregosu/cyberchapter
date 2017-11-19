import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { LocalstorageService } from 'app/services/localstorage.service';

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
