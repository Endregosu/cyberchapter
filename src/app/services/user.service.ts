import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

  private isUserLoggedIn = false;
  private username;
  private users: string = "app/users.json"; // pretend to be on a server

  constructor(private _http: Http) { 
    this.isUserLoggedIn = false;
  }

  getRegisteredUsers(){
    return this._http.get(this.users)
          .map((response:Response) => response.json());
  }

  setUserLoggedIn(value : boolean){
    if(!value){ //Logout scenarios
      localStorage.removeItem('currentUser');
      alert("Kijelentkeztél");
    }
    this.isUserLoggedIn = value;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
  
  setUserName(name : string){
    this.username = name;
  }
  
  getUserName(){
    return this.username;
  }

}
