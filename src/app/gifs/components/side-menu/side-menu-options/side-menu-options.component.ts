import {  Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption{
  label:String,
  subLabel:String,
  route:String,
  icon:String
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [
    RouterLink,RouterLinkActive
  ],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent { 

  menuOptions:MenuOption[]=[
    {
    label:'frending',
    subLabel:'Gifs Populares',
    route:'/dashboard/trending',
    icon:'fa-solid fa-chart-line',
    },
    {
      icon:'fa-solid fa-magnifying-glass',
      label:'buscador',
      subLabel:'Buscar Gifs',
      route:'/dashboard/search',
      }
  ]
}
