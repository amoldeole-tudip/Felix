///<reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import './app.loader.ts';
import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';
import { BaThemeConfig } from './theme/theme.config';
import { ComponentsHelper } from 'ng2-bootstrap';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { UserService } from './Services/user.ts';
import { HttpClientHelper } from './app.httpClient';
import { Router }       from '@angular/router';
import {AuthenticationHelper} from "../app/app.authentication";
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('normalize.css'), require('./app.scss')],
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `,
  providers: [UserService, HttpClientHelper, ToastOptions, ToastsManager]
})
export class App {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private _config: BaThemeConfig,
              private viewContainerRef: ViewContainerRef,
              public toastr: ToastsManager, vRef: ViewContainerRef,
              private router: Router,
              private authentication: AuthenticationHelper) {
    this.toastr.setRootViewContainerRef(vRef);

    this._fixModals();

    this._loadImages();

    if(!this.authentication.isLoggedIn()){
      this.router.navigate(['/login']);
    }

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
  // BaThemePreloader.registerLoader(this._imageLoader.
    // load(layoutPaths.images.root + 'sky-bg.jpg'));
  }

  private _fixModals(): void {
    ComponentsHelper.prototype.getRootViewContainerRef = function () {
      // https://github.com/angular/angular/issues/9293
      if (this.root) {
        return this.root;
      }
      let comps = this.applicationRef.components;
      if (!comps.length) {
        throw new Error('ApplicationRef instance not found');
      }
      try {
        /* one more ugly hack, read issue above for details */
        let rootComponent = this.applicationRef._rootComponents[0];
        this.root = rootComponent._component.viewContainerRef;
        return this.root;
      }
      catch (e) {
        throw new Error('ApplicationRef instance not found');
      }
    };
  }
}
