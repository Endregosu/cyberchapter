import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn = false;
  private username;

  constructor() { 
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(value : boolean){
    if(!value){ //Logout scenarios
      localStorage.removeItem('currentUser');
    }
    this.isUserLoggedIn = value;
  }

  getUserLoggedIn(){
    console.log(this.isUserLoggedIn);
    return this.isUserLoggedIn;
  }
  
  setUserName(name : string){
    this.username = name;
  }
  
  getUserName(){
    return this.username;
  }

}
