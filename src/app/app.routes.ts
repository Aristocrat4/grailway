import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckReturnComponent } from './components/check-return/check-return.component';
import { RoutesComponent } from './components/routes/routes.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'check-return', component: CheckReturnComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'passengers', component: PassengersComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];
