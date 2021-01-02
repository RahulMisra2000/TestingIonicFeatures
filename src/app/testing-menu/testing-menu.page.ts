import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-testing-menu',
  templateUrl: './testing-menu.page.html',
  styleUrls: ['./testing-menu.page.scss'],
})
export class TestingMenuPage implements OnInit {
  sub1 : Subscription = null;
  
  constructor(private r : Router, private menuService: MenuService) { }

  ngOnInit() {
    
      // In production version you should to make sure that the menu item isn't already in the menu before adding it
      // Also depending on the requirements you may want to add menu items in the view lifecycle hook which fires each time
      // the view becomes visible .. something like onDidEnterView ... something like that
    this.menuService.addToMenu(new Menu(Math.floor(Math.random()*100) + ' Testing Page ', '/testing-menu'));
  }

  link2Clicked(e){
    console.log("link 2 clicked");
    this.r.navigate(['/','bookings']);
  }
}
