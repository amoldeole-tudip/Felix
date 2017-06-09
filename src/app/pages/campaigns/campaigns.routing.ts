import { Routes, RouterModule }  from '@angular/router';
import { Campaigns } from './campaigns.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'campaigns',
    component: Campaigns,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
