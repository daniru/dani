import { TflPrediction } from './models/tfl-prediction';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TflLine, TflMode, TflStopPoint, TflDirection, TflRouteSequence, TflRouteSearchResponse
  // TflRoadCorridor, TflPlace, , TflStopPoint, TflRoadDisruption, TflTimetableResponse, TflFaresSection, TflPrediction
} from './models/index';

// https://api-portal.tfl.gov.uk/docs

@Injectable()
export class TflService {

  private _baseUrl = 'https://api.tfl.gov.uk';
  private _appId = 'fe647817';
  private _appKey = 'ff0d19ecd0e187bb07d6b7c7ec17fea6';

  constructor(private _http: Http) { }

  // SEARCH

  search(txt: string): Observable<TflRouteSearchResponse> {
    const url = `${this._baseUrl}/line/search/${txt}`;
    return this._httpCall(url)
      .map((r: Response, i: number) => <TflRouteSearchResponse>r.json());
  }

  // STATUS

  getStatus(modes: TflMode[]): Observable<TflLine[]> {
    const url = `${this._baseUrl}/line/mode/${this._tranformToMode(modes)}/status`;
    return this._httpCall(url)
      .map((r: Response, i: number) => <TflLine[]>r.json());
  }

  getArrivals(station: string): Observable<TflPrediction[]> {
    const url = `${this._baseUrl}/stoppoint/${station}/arrivals`;
    return this._httpCall(url)
      .map((r: Response, i: number) => <TflPrediction[]>r.json());
  }

  // STATIONS

  getBusStopPoints(busNumber: number): Observable<TflStopPoint[]> {
    const url = `https://api.tfl.gov.uk/line/${busNumber}/stoppoints`;
    return this._httpCall(url)
      .map((r: Response, i: number) => <TflStopPoint[]>r.json());
  }

  getRoute(lineId: string, direction: TflDirection): Observable<TflRouteSequence> {
    const url = `https://api.tfl.gov.uk/line/${lineId}/Route/Sequence/${direction}`;
    return this._httpCall(url)
      .map((r: Response, i: number) => <TflRouteSequence>r.json());
  }

  // HELPERS

  private _httpCall(url): Observable<Response> {
    url = `${url}${url.indexOf('?') === -1 ? '?' : '&'}app_id=${this._appId}&app_key=${this._appKey}`
    return this._http
      .get(url)
  }

  private _tranformToMode(models: TflMode[]): string {
    let result = '';
    _.each(models, (m, i) => {
      result += `${i < models.length ? ',' : '' }${m}`;
    });
    return result;
  }



  // // ARRIVALS

  // getArrivals(id_line: string, id_stoppoint?: string, direction?: string, id_end_point?: string): Observable<TflPrediction> {
  //   let url = `${this._baseUrl}/line/${id_line}/arrivals/${id_stoppoint? id_stoppoint : ''}`;
  //   if (direction) {
  //     url += `?direction=${direction}`;
  //   }
  //   if (id_end_point) {
  //     url += `${direction ? '&' : '?'}destinationStationId=${id_end_point}`;
  //   }
  //   return this._http
  //     .get(url)
  //     .map((r: Response, i: number) => <TflPrediction>r.json());
  // }

  // // TIMETABLE / FARES

  // getTimetable(id_line: string, id_stoppoint: string): Observable<TflTimetableResponse> {
  //   const url = `${this._baseUrl}/line/${id_line}/timetable/${id_stoppoint}`;
  //   return this._http
  //     .get(url)
  //     .map((r: Response, i: number) => <TflTimetableResponse>r.json());
  // }

  // getFare(id_start: string, id_end: string): Observable<TflFaresSection[]> {
  //   return this._http
  //     .get(`${this._baseUrl}/stoppoint/${id_start}/fareto/${id_end}`)
  //     .map((r: Response, i: number) => <TflFaresSection[]>r.json());
  // }

  // // ROADS

  // getRoads(): Observable<TflRoadCorridor[]> {
  //   return this._http
  //     .get(`${this._baseUrl}/road`)
  //     .map((r: Response, i: number) => <TflRoadCorridor[]>r.json());
  // }

  // getRoad(id: string): Observable<TflRoadCorridor> {
  //   return this._http
  //     .get(`${this._baseUrl}/road/${id}`)
  //     .map((r: Response, i: number) => <TflRoadCorridor>r.json());
  // }

  // getRoadStatus(id: string): Observable<TflRoadCorridor> {
  //   return this._http
  //     .get(`${this._baseUrl}/road/${id}/status`)
  //     .map((r: Response, i: number) => <TflRoadCorridor>r.json());
  // }

  // getRoadDisruptions(ids: string[]): Observable<TflRoadDisruption[]> {
  //   return this._http
  //     .get(`${this._baseUrl}/road/${ids.join(',')}/disruption`)
  //     .map((r: Response, i: number) => <TflRoadDisruption[]>r.json());
  // }

  // // BIKES

  // getBikePoints(lat?: number, lng?: number, radius?: number, lat2?: number, lng2?: number): Observable<TflPlace[]> {
  //   let url = `${this._baseUrl}/bikepoint`;
  //   if (lat && lng && radius) {
  //     url += `?lat=${lat}&lon=${lng}&radius=${radius}`;
  //   } else if (lat && lng && lat2 && lng2) {
  //     url += `?swLat=${lat}&swLon=${lng}&neLat=${lat2}&neLon=${lng2}`;
  //   }

  //   return this._http
  //     .get(url)
  //     .map((r: Response, i: number) => <TflPlace[]>r.json());
  // }

  // getBikePoint(id: string): Observable<TflPlace> {
  //   return this._http
  //     .get(`${this._baseUrl}/bikepoint/${id}`)
  //     .map((r: Response, i: number) => <TflPlace>r.json());
  // }

}
