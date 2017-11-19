import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { LocalstorageService } from 'app/services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  users = [];

  constructor(private router :Router, private user: UserService, private storageservice : LocalstorageService) { }

  ngOnInit() {
    this.user.getRegisteredUsers()
      .subscribe(resUsersData => this.users = resUsersData)
  }

  public loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    var authetincated = false;

    //Check the users - authenticate
    for (let user of this.users) {
      if(username == user.username && password == user.password) authetincated = true;
    }

    if(authetincated){
        this.user.setUserLoggedIn(true);
        this.user.setUserName(username);
        localStorage.setItem('currentUser', username);
        this.router.navigate(['products']);
       } else {
      alert("Helytelen felhasználónév / Jelszó :(")
    }
  }
}
