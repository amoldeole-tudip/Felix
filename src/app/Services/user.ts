import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientHelper } from '../app.httpClient';

import 'rxjs/Rx';

@Injectable()
export class UserService {
  private loginUrl: string = 'users/login';
  private signUpUrl: string = 'users/signUp';
  private generateCodeUrl: string = 'users/generateCode';
  private resetPasswordUrl: string = 'users/forgotPassword';
  private httpClient: HttpClientHelper;
  constructor(httpClient: HttpClientHelper) {
    this.httpClient = httpClient;
  }

  // For signup service
  userLogin(data): Observable<any> {
    return this.httpClient.postPreLogin(this.loginUrl, data)
      .map(this.extractResponse)
      .catch(this.handleError);
  }

  signUp(data): Observable<any> {
    return this.httpClient.postPreLogin(this.signUpUrl, data)
      .map(this.extractResponse)
      .catch(this.handleError);
  }

  generateCode(data): Observable<any> {
    return this.httpClient.postPreLogin(this.generateCodeUrl, data)
      .map(this.extractResponse)
      .catch(this.handleError);
  }

  resetPassword(data): Observable<any> {
    return this.httpClient.postPreLogin(this.resetPasswordUrl, data)
      .map(this.extractResponse)
      .catch(this.handleError);
  }

  private extractResponse(res) {
    return res;
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }
}
