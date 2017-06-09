import { Routes, RouterModule }  from '@angular/router';

import { SignUp } from './signUp.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: SignUp
  }
];

export const routing = RouterModule.forChild(routes);
