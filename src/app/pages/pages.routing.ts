import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { LoginGuard } from '../filter/app.guard.ts';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'forgot-password',
    loadChildren: () => System.import('./forgotPassword/forgotPassword.module')
  },
  {
    path: 'sign-up',
    loadChildren: () => System.import('./signUp/signUp.module')
  },
  {
    path: 'reset-password',
    loadChildren: () => System.import('./resetPassword/resetPassword.module')
  },
  {
    path: '',
    component: Pages,
    children: [
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module')
        , canActivate: [LoginGuard] },
      { path: 'campaign/createCampaign'
        , loadChildren: () => System.import('./campaigns/createCampaign/createCampaign.module')},
      { path: 'campaign/viewCampaign'
        , loadChildren: () => System.import('./campaigns/viewCampaign/viewCampaign.module')},
      { path: 'campaign/drafts'
        , loadChildren: () => System.import('./campaigns/drafts/drafts.module')},
      { path: 'audience', loadChildren: () => System.import('./audience/audience.module')
        , canActivate: [LoginGuard] },
      { path: 'settings', loadChildren: () => System.import('./settings/settings.module')
        , canActivate: [LoginGuard] }
      ]
  }
];

export const routing = RouterModule.forChild(routes);
