import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Terms } from './pages/terms/terms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'privacidad', component: PrivacyPolicy },
  { path: 'terminos', component: Terms },
  { path: '**', redirectTo: '' },
];
