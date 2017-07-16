import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Marker } from './models/marker';
import { Polygon } from './models/polygon'

const google: any = {};

@Component({
  selector: 'dr-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent {

  @Input() lat = 51.678418;
  @Input() lng = 7.809007;
  @Input() markers: Marker[];
  @Input() polygons: Polygon[];

  constructor(private _http: Http) { }

}
