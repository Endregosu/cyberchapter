import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';
import { LocalstorageService } from 'app/localstorage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  public loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if(username ==  'admin' && password == 'admin'){
      this.user.setUserLoggedIn(true);
        localStorage.setItem('currentUser', username);
    }
  }

  public localStorageItem(id: string): string {
    return localStorage.getItem('currentUser');
  }

}
