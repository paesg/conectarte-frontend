import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: AboutComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
