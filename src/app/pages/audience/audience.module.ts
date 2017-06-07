import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Audience } from './audience.component';
import { routing }       from './audience.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
  ],
  declarations: [
    Audience
  ],
  providers: [
  ]
})
export default class AudienceModule {}
