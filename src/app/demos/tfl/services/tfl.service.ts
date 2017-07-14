import { TflRoadCorridor } from './models/tfl-road-corridor';
import { TflPlace } from './models/tfl-place';
import { TflStatus } from './models/tfl-status';
import { TflStopPoint } from './models/tfl-stop-point';
import { TflRoadDisruption } from './models/tfl-road-disruption';
import { TflTimetableResponse } from './models/tfl-timetable-response';
import { TflFaresSection } from './models/tfl-fares-section';
import { TflPrediction } from './models/tfl-prediction';
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
      .map((r: Response, i: number) => <TflStopPoint[]>r.json());
  }

  // ARRIVALS

  getArrivals(id_line: string, id_stoppoint?: string, direction?: string, id_end_point?: string): Observable<TflPrediction> {
    let url = `${this._baseUrl}/line/${id_line}/arrivals/${id_stoppoint? id_stoppoint : ''}`;
    if (direction) {
      url += `?direction=${direction}`;
    }
    if (id_end_point) {
      url += `${direction ? '&' : '?'}destinationStationId=${id_end_point}`;
    }
    return this._http
      .get(url)
      .map((r: Response, i: number) => <TflPrediction>r.json());
  }

  // TIMETABLE / FARES

  getTimetable(id_line: string, id_stoppoint: string): Observable<TflTimetableResponse> {
    const url = `${this._baseUrl}/line/${id_line}/timetable/${id_stoppoint}`;
    return this._http
      .get(url)
      .map((r: Response, i: number) => <TflTimetableResponse>r.json());
  }

  getFare(id_start: string, id_end: string): Observable<TflFaresSection[]> {
    return this._http
      .get(`${this._baseUrl}/stoppoint/${id_start}/fareto/${id_end}`)
      .map((r: Response, i: number) => <TflFaresSection[]>r.json());
  }

  // ROADS

  getRoads(): Observable<TflRoadCorridor[]> {
    return this._http
      .get(`${this._baseUrl}/road`)
      .map((r: Response, i: number) => <TflRoadCorridor[]>r.json());
  }

  getRoad(id: string): Observable<TflRoadCorridor> {
    return this._http
      .get(`${this._baseUrl}/road/${id}`)
      .map((r: Response, i: number) => <TflRoadCorridor>r.json());
  }

  getRoadStatus(id: string): Observable<TflRoadCorridor> {
    return this._http
      .get(`${this._baseUrl}/road/${id}/status`)
      .map((r: Response, i: number) => <TflRoadCorridor>r.json());
  }

  getRoadDisruptions(ids: string[]): Observable<TflRoadDisruption[]> {
    return this._http
      .get(`${this._baseUrl}/road/${ids.join(',')}/disruption`)
      .map((r: Response, i: number) => <TflRoadDisruption[]>r.json());
  }

  // BIKES

  getBikePoints(lat?: number, lng?: number, radius?: number, lat2?: number, lng2?: number): Observable<TflPlace[]> {
    let url = `${this._baseUrl}/bikepoint`;
    if (lat && lng && radius) {
      url += `?lat=${lat}&lon=${lng}&radius=${radius}`;
    } else if (lat && lng && lat2 && lng2) {
      url += `?swLat=${lat}&swLon=${lng}&neLat=${lat2}&neLon=${lng2}`;
    }

    return this._http
      .get(url)
      .map((r: Response, i: number) => <TflPlace[]>r.json());
  }

  getBikePoint(id: string): Observable<TflPlace> {
    return this._http
      .get(`${this._baseUrl}/bikepoint/${id}`)
      .map((r: Response, i: number) => <TflPlace>r.json());
  }

}
