import { Routes, RouterModule }  from '@angular/router';

import { resetPassword } from './resetPassword.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: resetPassword
  }
];

export const routing = RouterModule.forChild(routes);
