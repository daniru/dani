import { TflRoad } from './../models/tfl-road';
import { TflBikePoint } from './../models/tfl-bike-point';
import { TflStatus } from './../models/tfl-status';
import { TflStopPoint } from './../models/tfl-stop-point';
import { TflRoadDisruption } from './../models/tfl-road-disruption';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// https://api-portal.tfl.gov.uk/docs

@Injectable()
export class TflService {

  private _baseUrl = 'https://api.tfl.gov.uk';

  constructor(private _http: Http) { }

  getStatus(): Observable<TflStatus[]> {
    const url = `https://api.tfl.gov.uk/line/mode/tube/status`;
    return this._http
      .get(url)
      .map((r: Response, i: number) => <TflStatus[]>r.json());
  }

  getAllStatus(): Observable<TflStatus[]> {
    const url = `https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status`;
    return this._http
      .get(url)
      .map((r: Response, i: number) => <TflStatus[]>r.json());
  }

  getBusStopPoints(busNumber: number): Observable<TflStopPoint[]> {
    const url = `https://api.tfl.gov.uk/line/${busNumber}/stoppoints`;
    return this._http
      .get(url)
      .map(this._transformBusStopPoints);
  }

  // TIMETABLE / FARES

  // todo
  getTimetable(id_line: string, id_stoppoint: string) {
    const url = `${this._baseUrl}/line/${id_line}/timetable/${id_stoppoint}`;
  }

  // todo
  getFare(id_start: string, id_end: string) {
    const url = `${this._baseUrl}/stoppoint/${id_start}/fareto/${id_end}`;
  }

  // ROADS

   getRoads(): Observable<TflRoad[]> {
    return this._http
      .get(`${this._baseUrl}/road`)
      .map((r: Response, i: number) => <TflRoad[]>r.json());
  }

  getRoadDisruptions(ids: string[]): Observable<TflRoadDisruption[]> {
    return this._http
      .get(`${this._baseUrl}/road/${ids.join(',')}/disruption`)
      .map((r: Response, i: number) => <TflRoadDisruption[]>r.json());
  }

  // BIKES

  getBikePoints(): Observable<TflBikePoint[]> {
    return this._http
      .get(`${this._baseUrl}/bikepoint`)
      .map((r: Response, i: number) => <TflBikePoint[]>r.json());
  }

  private _transformBusStopPoints(response: Response, index: number): TflStopPoint[] {
    return <TflStopPoint[]>response.json();
  }
}
