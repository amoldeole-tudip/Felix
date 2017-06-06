import { Routes, RouterModule }  from '@angular/router';
import { Drafts } from './drafts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Drafts,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
