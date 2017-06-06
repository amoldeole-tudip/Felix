import { Injectable , Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AuthenticationHelper } from "./app.authentication";
import { Router }  from '@angular/router';

@Injectable()
export class HttpClientHelper {
   // baseUrl: String  = 'http://107.170.41.168:3001/';
   baseUrl: String  = 'http://40.121.205.121:3001/';
  constructor(private http: Http, private authentication: AuthenticationHelper, private router: Router) {
    this.http = http;
  }

  createAuthorizationHeader(): Headers {
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
      headers.append('token', localStorage.getItem('token'));
      headers.append('apikey', '1b0b3ff9876a5bf1d33f9767a7489a6f');
     return headers;
  }

  get(url): Observable<any> {
    url = this.baseUrl + url;
    let headers = this.createAuthorizationHeader();
    return this.http.get(url,  { headers: headers })
           .map(this.extractResponse)
           .catch(this.handleError);
  }

  postPreLogin(url, data): Observable<any> {
    let body = JSON.stringify(data);
    let headers = this.createAuthorizationHeader();
    url = this.baseUrl + url;
    return this.http.post(url, body, { headers: headers })
           .map(this.extractResponse)
           .catch(this.handleError);
  }

  post(url, data): Observable<any> {
    let body = JSON.stringify(data);
    let headers = this.createAuthorizationHeader();
    url = this.baseUrl + url;
     return this.http.post(url, body, { headers: headers })
           .map(this.extractResponse)
           .catch(this.handleError);
  }
  delete (url: string): Observable<any> {
    let options: RequestOptions;
      let headers = this.createAuthorizationHeader();
      options = new RequestOptions({ headers: headers  });
    return this.http.delete(this.baseUrl + url, options)
           .map(this.extractResponse)
           .catch(this.handleError);
    }

  extractResponse(res: Response) {
    let body = res.json();
      return body;
    }


  private handleError(error: Response): Observable<any> {
    let result = error.json();
    if (!result || !result.error.message){
      result.error.message = 'Unexpected Error Occured at server';
    }
    return Observable.throw(result ||  'Server error');
  }

}

