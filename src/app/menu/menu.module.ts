import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'app/menu/menu.component';
import { SubmenuComponent } from 'app/submenu/submenu.component';
import { routes } from 'app/app.router';

@NgModule({
  imports: [
    CommonModule,
    routes,
  ],
  declarations: [
    MenuComponent,
    SubmenuComponent
  ]
})
export class MenuModule { }
