import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientHelper } from '../app.httpClient';
import { of }         from 'rxjs/observable/of';
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

/*
  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getHeroes(): Observable<Hero[]> {
    return of(heroes).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateHero(hero: Hero): Observable<Hero>  {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
    return of(newHero).delay(this.delayMs); // simulate latency with delay
  }
*/
}

