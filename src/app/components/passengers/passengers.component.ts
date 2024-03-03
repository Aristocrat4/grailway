import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passengers',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './passengers.component.html',
  styleUrl: './passengers.component.scss',
})
export class PassengersComponent {
  constructor(private router: Router) {}
  onBuyNow() {
    this.router.navigate(['payment']);
  }
}
