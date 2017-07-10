import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { TflService } from './../../services/tfl.service';
import { TflStopPoint } from './../../models/tfl-stop-point';
import { Marker } from './../../../../shared/components/gmaps/models/marker';


@Component({
  selector: 'dr-stoppoints',
  templateUrl: './stoppoints.component.html',
  styleUrls: ['./stoppoints.component.scss']
})
export class StoppointsComponent implements OnInit {

  data: any[];
  lat: number;
  lng: number;
  markers: Marker[];

  constructor(private _tflService: TflService) { }

  ngOnInit() {
    this.markers = [];
    this._tflService.getBusStopPoints(49).subscribe((data: TflStopPoint[]) => {
      this.data = data;
      this.lat = data[0].lat;
      this.lng = data[0].lon;
      _.each(data, (p) => {
        this.markers.push({ lat: p.lat, lng: p.lon });
      });
    });
  }

}
