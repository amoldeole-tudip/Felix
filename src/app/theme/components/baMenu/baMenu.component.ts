import {Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {Router, Routes, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

import {BaMenuService} from './baMenu.service';
import {GlobalState} from '../../../global.state';

@Component({
  selector: 'ba-menu',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./baMenu.scss')],
  template: require('./baMenu.html'),
  providers: [BaMenuService]
})
export class BaMenu {

  @Input() menuRoutes: Routes = [];
  @Input() sidebarCollapsed: boolean = false;
  @Input() menuHeight: number;

  @Output() expandMenu = new EventEmitter<any>();

  public menuItems: any[];
  public showHoverElem: boolean;
  public hoverElemHeight: number;
  public hoverElemTop: number;
  protected _onRouteChange: Subscription;
  public outOfArea: number = 0;
  constructor(private _router: Router, private _service: BaMenuService, private _state: GlobalState) {
    this._onRouteChange = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.menuItems) {
          this.selectMenuAndNotify();
        } else {
          // on page load we have to wait as event is fired before menu elements are prepared
          setTimeout(() => this.selectMenuAndNotify());
        }
        if (event.url === '/profile' || event.url === '/editidea') {
            this.titleNotify(event);
        }
      }
    });
  }

  public selectMenuAndNotify(): void {
    if (this.menuItems) {
      this.menuItems = this._service.selectMenuItem(this.menuItems);
      this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
    }
  }

 public titleNotify(event): void {
    this._state.notifyDataChanged('menu.activeLink', null);
     this._state.notifyDataChanged('menu.title', event);
 }
  public ngOnInit(): void {
    this.menuItems = this._service.convertRoutesToMenus(this.menuRoutes);
  }

  public ngOnDestroy(): void {
    this._onRouteChange.unsubscribe();
  }

  public hoverItem($event): void {
    this.showHoverElem = true;
  //  this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    if($event.currentTarget.getBoundingClientRect().top - 66 > 0)
      this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
        }

  public toggleSubMenu($event): boolean {
    let submenu = jQuery($event.currentTarget).next();
   if (this.sidebarCollapsed) {
      this.expandMenu.emit(null);
      if (!$event.item.expanded) {
        $event.item.expanded = true;
      }
    } else {
      $event.item.expanded = !$event.item.expanded;
      submenu.slideToggle();
    }

    return false;
  }
}
