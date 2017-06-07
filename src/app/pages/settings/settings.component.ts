import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {AuthenticationHelper} from "../../app.authentication";
import { Router }       from '@angular/router';

@Component({
  selector: 'settings',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./settings.scss')],
  template: require('./settings.html')
})
export class Settings {

  constructor(private authentication: AuthenticationHelper,  private router: Router) {
    if(this.authentication.isLoggedIn()){
      this.router.navigate(['settings']);
    }
    else {
      this.router.navigate(['login']);
    }
  }
}
