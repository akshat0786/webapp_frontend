import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'category-list',
    loadChildren: () =>
      import('./category-list/category-list.module').then(
        (m) => m.CategoryListModule
      ),
  },
  {
    path: 'practice',
    loadChildren: () =>
      import('./practice/practice.module').then((m) => m.PracticeModule),
  },
];
