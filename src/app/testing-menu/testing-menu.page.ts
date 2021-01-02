import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-testing-menu',
  templateUrl: './testing-menu.page.html',
  styleUrls: ['./testing-menu.page.scss'],
})
export class TestingMenuPage implements OnInit {

  constructor(private r : Router) { }

  ngOnInit() {
  }

  link2Clicked(e){
    console.log("link 2 clicked");
    this.r.navigate(['/','bookings']);
  }
}
