import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckReturnComponent } from './components/check-return/check-return.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'check-return', component: CheckReturnComponent },
];
