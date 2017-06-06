import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';
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
