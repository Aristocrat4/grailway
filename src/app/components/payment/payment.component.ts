import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  constructor(private router: Router) {}
  onPayNow() {
    this.router.navigate(['confirmation']);
  }
}
