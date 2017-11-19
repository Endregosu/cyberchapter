import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  
})
export class LoginDialogComponent {

  public visible = false;
  public visibleAnimate = false;

  constructor(private user:UserService){

  }
  
  ngOnInit(){

  }
  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  public loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if(username ==  'admin' && password == 'admin'){
      this.user.setUserLoggedIn(true);
        console.log("You are authenticatd... :)");
    }
  }
}
