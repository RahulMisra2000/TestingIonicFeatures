import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AuthService } from "./auth/auth.service";
import { Network} from "@ngx-pwa/offline";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit{
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private network : Network
  ) {
    this.initializeApp();
  }

  onlineChanges$ : Observable<boolean>;

  ngOnInit(): void {
    this.onlineChanges$ = this.network.onlineChanges;
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
}
