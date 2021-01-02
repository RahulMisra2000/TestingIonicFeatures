import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AuthService } from "./auth/auth.service";
import { Network } from "@ngx-pwa/offline";
import { Observable, Subscription } from "rxjs";
import { MenuService } from "./menu.service";
import { Menu } from "./menu.model";
import { take } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private network: Network,
    private menuService: MenuService
  ) {
    this.initializeApp();
  }
  

  onlineChanges$: Observable<boolean>;
  menu: Menu[] = null;
  sub1 : Subscription = null;

  ngOnInit(): void {
    this.onlineChanges$ = this.network.onlineChanges;
    let m = [new Menu('Bookings', '/bookings'), new Menu('Discover', '/places/tabs/discover')];


    this.sub1 = this.menuService.menu$
      .subscribe(ma => {
        this.menu = ma;
      });

    this.menuService.initializeMenu(m);

  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl("/auth");
  }


  ngOnDestroy(): void {
    if (this.sub1){
      this.sub1.unsubscribe();
    }
  }
}
