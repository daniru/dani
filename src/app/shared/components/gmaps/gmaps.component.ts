import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Marker } from './models/marker';

var google: any;

@Component({
  selector: 'dr-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent {

  @Input() lat: number = 51.678418;
  @Input() lng: number = 7.809007;
  @Input() markers: Marker[];

  constructor(private _http: Http) { }

}
