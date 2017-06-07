import { Routes, RouterModule }  from '@angular/router';
import { Settings } from './settings.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Settings,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
