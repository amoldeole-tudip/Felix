import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Settings } from './settings.component';
import { routing }       from './settings.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
  ],
  declarations: [
    Settings
  ],
  providers: [
  ]
})
export default class SettingsModule {}
