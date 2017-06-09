import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ViewCampaign } from './viewCampaign.component';
import { routing }       from './viewCampaign.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
  ],
  declarations: [
    ViewCampaign
  ],
  providers: [
  ]
})
export default class ViewCampaignModule {}
