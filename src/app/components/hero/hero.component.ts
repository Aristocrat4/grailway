import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';
import { Router } from '@angular/router';
import { StationsService } from '../../services/stations.service';
import { Store } from '@ngrx/store';
import { StationActions } from '../../state/stations/station.actions';
import { Station } from '../../state/stations/station.model';
import { Observable } from 'rxjs';
import { selectStations } from '../../state/stations/station.selectors';
import { StationsState } from '../../state/stations/station.reducer';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  model: string = '';
  stationsList$: Observable<StationsState> = this.store.select(selectStations);
  constructor(private router: Router, private store: Store) {}
  onFind() {
    this.router.navigate(['routes']);
  }
  ngOnInit() {
    this.store.dispatch(StationActions.loadStations());
  }
}
