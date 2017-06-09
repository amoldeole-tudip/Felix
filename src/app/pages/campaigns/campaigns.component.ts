import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationHelper } from '../../app.authentication';
import { Router }       from '@angular/router';

@Component({
  selector: 'campaigns',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./campaigns.scss')],
  template: `<router-outlet></router-outlet>`
})
export class Campaigns {

  constructor(private authentication: AuthenticationHelper,  private router: Router) {
    if (!this.authentication.isLoggedIn()){
      this.router.navigate(['login']);
    }
  }
}
