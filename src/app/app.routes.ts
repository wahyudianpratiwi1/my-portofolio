import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./portfolio-list/portfolio-list.component').then(
        (m) => m.PortfolioListComponent
      ),
  },
  {
    path: 'portfolio/:id',
    loadComponent: () =>
      import('./portfolio-detail/portfolio-detail.component').then(
        (m) => m.PortfolioDetailComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];
