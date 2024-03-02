import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss',
})
export class RoutesComponent {
  constructor(private route: Router) {}
  onReservation() {
    this.route.navigate(['passengers']);
  }
}
