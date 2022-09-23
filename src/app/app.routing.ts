import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./modules/main/main.module')
        .then((m) => m.MainModule)
        .catch((e) => console.error(e)),
  },
];
