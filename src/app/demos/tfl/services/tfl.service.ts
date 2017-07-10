import { TflStatus } from './../models/tfl-status';
import { TflStopPoint } from './../models/tfl-stop-point';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TflService {

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

  private _transformBusStopPoints(response: Response, index: number): TflStopPoint[] {
    return <TflStopPoint[]>response.json();
  }
}
