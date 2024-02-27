import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'store',
    loadComponent: () =>
      import('./pages/store/store.component').then((c) => c.StoreComponent),
  },
  {
    path: 'seller/:id',
    loadComponent: () =>
      import('./pages/seller/seller.component').then((c) => c.SellerComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import(
        './pages/store/pages/product-detail/product-detail-page.component'
      ).then((c) => c.ProductDetailPageComponent),
  },

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
