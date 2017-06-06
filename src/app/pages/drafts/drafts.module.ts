import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Drafts } from './drafts.component';
import { routing }       from './drafts.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
  ],
  declarations: [
    Drafts
  ],
  providers: [
  ]
})
export default class DraftsModule {}
