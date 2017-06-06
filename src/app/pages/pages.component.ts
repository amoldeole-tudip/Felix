import { Component, ViewEncapsulation } from '@angular/core';
import {AuthenticationHelper} from "../app.authentication";
import { Router }       from '@angular/router';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; Copyright Tudip {{currentYear}}</div>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {
  public currentYear;
  constructor(private authentication: AuthenticationHelper,  private router: Router) {
    if(!this.authentication.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    else if(this.authentication.isLoggedIn()){
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
