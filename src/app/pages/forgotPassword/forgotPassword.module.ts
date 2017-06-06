import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { forgotPassword } from './forgotPassword.component';
import { routing }       from './forgotPassword.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  declarations: [
    forgotPassword
  ]
})
export default class ForgotPassword {}
