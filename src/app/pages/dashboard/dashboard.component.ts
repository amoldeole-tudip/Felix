import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationHelper } from '../../app.authentication';
import { Router }       from '@angular/router';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor(private authentication: AuthenticationHelper,  private router: Router) {
    if (!this.authentication.isLoggedIn()){
      this.router.navigate(['login']);
    }
  }
}
