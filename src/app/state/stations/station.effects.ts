import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StationActions } from './station.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { StationsService } from '../../services/stations.service';

@Injectable()
export class StationEffects {
  constructor(
    private actions$: Actions,
    private stationsService: StationsService
  ) {}

  loadStations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StationActions.loadStations),
      mergeMap(() =>
        this.stationsService.getStations().pipe(
          map((stations) =>
            StationActions.loadStationsSuccess({ stations: stations })
          ),
          catchError((error) =>
            of(StationActions.loadStationsFailure({ error }))
          )
        )
      )
    )
  );
}
