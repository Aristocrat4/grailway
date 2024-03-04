import { createReducer, on } from '@ngrx/store';
import { StationActions } from './station.actions';
import { Station } from './station.model';

export const stationFeatureKey = 'station';

export interface StationsState {
  stations: Station[];
  loading: boolean;
  error: unknown;
}

export const initialState: StationsState = {
  stations: [],
  loading: false,
  error: null,
};

export const stationsReducer = createReducer(
  initialState,
  on(StationActions.loadStations, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(StationActions.loadStationsSuccess, (state, { stations }) => ({
    ...state,
    stations,
    loading: false,
    error: null,
  })),
  on(StationActions.loadStationsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
