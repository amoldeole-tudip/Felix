import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {AuthenticationHelper} from "../../app.authentication";
import { Router }       from '@angular/router';

@Component({
  selector: 'audience',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./audience.scss')],
  template: require('./audience.html')
})
export class Audience{

  constructor(private authentication: AuthenticationHelper,  private router: Router) {
    if(!this.authentication.isLoggedIn()){
      this.router.navigate(['login']);
    }
  }
}
