import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationHelper } from '../../../../../app.authentication';
@Component({
  selector: 'ba-menu-item',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./baMenuItem.scss')],
  template: require('./baMenuItem.html')
})
export class BaMenuItem {

  @Input() menuItem: any;
  @Input() child: boolean = false;
 // manageSession: boolean = false;
  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();
  constructor(private authentication: AuthenticationHelper){}
  public onHoverItem($event):void {
    this.itemHover.emit($event);
  }
  ngAfterViewInit(){
  }
  onToggleSubMenu($event, item):boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }
}
