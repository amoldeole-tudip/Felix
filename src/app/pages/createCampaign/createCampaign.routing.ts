import { Routes, RouterModule }  from '@angular/router';
import { CreateCampaign } from './createCampaign.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CreateCampaign,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
