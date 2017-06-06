import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'viewCampaign',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./viewCampaign.scss')],
  template: require('./viewCampaign.html')
})
export class ViewCampaign {

  constructor() {
  }
}
