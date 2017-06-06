import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'drafts',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./drafts.scss')],
  template: require('./drafts.html')
})
export class Drafts {

  constructor() {
  }
}
