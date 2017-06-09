import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { CreateCampaign } from './createCampaign.component';
import { routing }       from './createCampaign.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
  ],
  declarations: [
    CreateCampaign
  ],
  providers: [
  ]
})
export default class CreateCampaignModule {}
