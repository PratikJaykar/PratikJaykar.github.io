import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
  <app-side-nav></app-side-nav>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showSideBar: boolean;
  isLoggedIn: boolean;

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let urlSlice = e.url.toString().substr(0, 10);
        if (urlSlice.indexOf("login") !== -1) {
          console.log(urlSlice);
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
        }
      }
    });
  }
  constructor(private router: Router) {
    this.showSideBar = true;
  }
  title = 'icici';  
}
