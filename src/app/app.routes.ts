import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'store',
    loadComponent: () =>
      import('./pages/store/store.component').then((c) => c.StoreComponent),
  },

  // TODO:
  {
    path: 'seller/:id',
    loadComponent: () =>
      import('./pages/seller/seller.component').then((c) => c.SellerComponent),
  },
  { path: 'product/:id', loadComponent: () => StoreComponent },

  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
  },
];
