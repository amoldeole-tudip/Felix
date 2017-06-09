import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Dashboard } from './campaigns.component';
import { routing }       from './campaigns.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
  ],
  declarations: [
    Dashboard
  ],
  providers: [
  ]
})
export default class DashboardModule {}
