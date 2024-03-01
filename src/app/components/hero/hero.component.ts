import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  model: string = '';
  list = ['Tbilisi', 'Batumi', 'Poti'];
}
