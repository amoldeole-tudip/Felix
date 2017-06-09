import { Routes, RouterModule }  from '@angular/router';
import { CreateCampaign } from './createCampaign.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCampaign,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
