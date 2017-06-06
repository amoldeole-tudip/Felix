import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 ];

export const routing = RouterModule.forRoot(routes, { useHash: true });
