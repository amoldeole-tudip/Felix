import { Injectable , Inject, EventEmitter,  Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationHelper {
  constructor(private route: Router) {
  }
  public setToken(token){
    localStorage.setItem('token', token);
  }
  public setApiKey(api_key){
    localStorage.setItem('api-key', api_key);
  }
  public getToken(){
    return localStorage.getItem('token');
  }
  redirectToLogin() {
    this.route.navigate(['login']);
  }
  isLoggedIn() {
    let token = this.getToken();
    if (token && token.length > 0) {
      return true;
    }
    return false;
  }
  }
