import { Routes, RouterModule }  from '@angular/router';

import { signUp } from './signUp.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: signUp
  }
];

export const routing = RouterModule.forChild(routes);
