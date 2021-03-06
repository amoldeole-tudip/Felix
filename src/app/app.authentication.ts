import { Injectable , Inject, EventEmitter,  Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationHelper {
  constructor(private route: Router) {
  }
  public setToken(token){
    localStorage.setItem('token', token);
  }
  public setApiKey(apiKey){
    localStorage.setItem('api-key', apiKey);
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
