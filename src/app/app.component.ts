import { Component } from '@angular/core';

@Component({
   moduleId: module.id,
   selector: 'app',
   templateUrl: 'app.component.html'
})

export class AppComponent {
    public localStorageItem(id: string): string {
        console.log(localStorage.getItem('currentUser'));
        return localStorage.getItem('currentUser');
      }
 }