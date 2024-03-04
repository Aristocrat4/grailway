import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Station } from './station.model';

export const StationActions = createActionGroup({
  source: 'Station',
  events: {
    'Load Stations': emptyProps(),
    'Load Stations Success': props<{ stations: Station[] }>(),
    'Load Stations Failure': props<{ error: unknown }>(),
  },
});
