import { Routes, RouterModule }  from '@angular/router';

import { ResetPassword } from './resetPassword.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ResetPassword
  }
];

export const routing = RouterModule.forChild(routes);
