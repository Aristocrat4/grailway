import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StationsState } from './station.reducer';

export const selectStationsState =
  createFeatureSelector<StationsState>('stations');

export const selectStations = createSelector(
  selectStationsState,
  (state) => state
);
