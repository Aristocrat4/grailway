import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from '../state/stations/station.model';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  private stationsAPI = 'http://localhost:3000/api/stations';
  constructor(private http: HttpClient) {}

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.stationsAPI);
  }
}
