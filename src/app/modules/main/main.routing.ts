import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'server',
        loadChildren: () =>
          import('./server/server.module').then((m) => m.ServerModule),
      },
      {
        path: 'application',
        loadChildren: () =>
          import('./application/application.module').then(
            (m) => m.ApplicationModule
          ),
      },
    ],
  },
];
