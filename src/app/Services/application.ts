import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientHelper } from '../app.httpClient';
import 'rxjs/add/operator/delay';
import 'rxjs/Rx';

// import localStorage from 'localStorage';

@Injectable()
export class ApplicationAdminServices {
  private setDemoUrl: string = 'admin/demo';
  private httpClient: HttpClientHelper;
  constructor(httpClient: HttpClientHelper) {
    this.httpClient = httpClient;
  }
  // For Demo service
  getDemo(data): Observable<any> {
    return this.httpClient.postPreLogin(this.setDemoUrl, data)
      .map(this.extractResponse)
      .catch(this.handleError);
  }
  private extractResponse(res) {
  return res;
  }
  private handleError(error) {
    return Observable.throw(error);
  }
}

export class HeroService {

}

