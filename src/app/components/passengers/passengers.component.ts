import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-passengers',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './passengers.component.html',
  styleUrl: './passengers.component.scss',
})
export class PassengersComponent {}
