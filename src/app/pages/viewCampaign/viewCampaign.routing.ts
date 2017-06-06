import { Routes, RouterModule }  from '@angular/router';
import { ViewCampaign } from './viewCampaign.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ViewCampaign,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
