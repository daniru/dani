import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { TflService } from '../../services/tfl.service';
import { TflRouteSequence, TflDirection } from '../../services/models/index';
import { Marker } from '../../../../shared/components/gmaps/models/marker';
import { Polygon } from '../../../../shared/components/gmaps/models/polygon';

@Component({
  selector: 'dr-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  data: TflRouteSequence;
  minLat: number;
  minLon: number;
  markers: Marker[];
  polygons: Polygon[]
  lines: any[];

  constructor(private _tflService: TflService) {
    this.minLat = 100;
    this.minLon = 100;
  }

  ngOnInit() {
    this.lines = [];
    this.markers = [];
    this.polygons = [];
    this._tflService.getRoute('49', TflDirection.all).subscribe((data: TflRouteSequence) => {
      console.log('data', data.lineStrings);
      this.data = data;
      this.minLat = _.mean(_.map(data.stations, (x) => x.lat));
      this.minLon = _.mean(_.map(data.stations, (x) => x.lon));
      // this.polygons = Json.[{ path: <any>data.lineStrings }];
      // console.log(data.lineStrings);
      // console.log(JSON.parse(data.lineStrings[0]));
      _.each(data.lineStrings, (x) => {
        const path: any[] = [];
        _.each(JSON.parse(x), (points) => {
          _.each(points, (point) => {
            path.push({ lat: point[1], lng: point[0] })
          });
        });
        console.log(path);
        this.polygons.push({ path: path });
      });
      console.log(this.polygons);
      // _.each(data.stations, (p) => {
      //   this.markers.push({ lat: p.lat, lng: p.lon });
      // });
    });
  }

}
