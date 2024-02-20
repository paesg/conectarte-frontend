import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', loadComponent: () => StoreComponent },

  // TODO:
  { path: 'seller/:id', loadComponent: () => StoreComponent },
  { path: 'product/:id', loadComponent: () => StoreComponent },

  { path: 'about-us', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
