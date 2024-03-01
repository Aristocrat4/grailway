import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  onLogo() {
    this.router.navigate(['/']);
  }
  onCheck() {
    this.router.navigate(['check-return']);
  }
}
