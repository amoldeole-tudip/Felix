import { Routes, RouterModule }  from '@angular/router';
import { Audience } from './audience.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Audience,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
