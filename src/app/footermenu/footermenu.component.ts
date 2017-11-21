import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { LocalstorageService } from 'app/services/localstorage.service';

@Component({
  selector: 'app-footermenu',
  templateUrl: './footermenu.component.html',
  styleUrls: ['./footermenu.component.css']
})
export class FooterMenuComponent implements OnInit {

  constructor(private user : UserService, private storageservice : LocalstorageService) {

   }

  ngOnInit() {
  }

}
