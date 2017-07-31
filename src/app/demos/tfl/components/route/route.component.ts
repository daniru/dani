import * as _ from 'lodash';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TflService } from '../../services/tfl.service';
import { TflRouteSequence, TflDirection, TflRouteSearchMatch, TflMatchedStop,
  TflSearchResponse, TflStopPointSequence } from '../../services/models/index';
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

  term: FormControl;
  items: TflRouteSearchMatch[];
  selected: TflRouteSearchMatch;
  outbound: boolean;

  displayedColumns = ['letter', 'name'];
  database = new StationDatabase();
  dataSource: StationDataSource | null

  @ViewChild('filter') filter: ElementRef;

  constructor(private _tflService: TflService) {
    this.minLat = 100;
    this.minLon = 100;
    this.term = new FormControl();
    this.selected = null;
    this.outbound = false;
  }

  ngOnInit() {
    this.dataSource = new StationDataSource(this.database);
    this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .filter(term => term.length > 0)
      .flatMap(term => this._tflService.search(term))
      .subscribe(response => this.items = response.searchMatches);

    console.log('this.filter', this.filter);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
    this.selectLine(<any>{ lineId: 'n207' });
  }

  selectLine(line: TflRouteSearchMatch) {
    this.selected = line;
    console.log('line selected', line);
    this.dataSource.clear();
    this.markers = [];
    this.polygons = [];
    this._tflService
      .getRoute(line.lineId, this.outbound ? TflDirection.outbound : TflDirection.inbound)
      .subscribe((data: TflRouteSequence) => {
        this.data = data;
        console.log('data', this.data)
        this.minLat = _.mean(_.map(data.stations, (x) => x.lat));
        this.minLon = _.mean(_.map(data.stations, (x) => x.lon));
        const path: any[] = [];
        const _thisx = this;
        _.each(data.stopPointSequences, (seq: TflStopPointSequence) => {
          _.each(seq.stopPoint, (station: TflMatchedStop) => {
            this.database.addStation(station);
            path.push({ lat: station.lat, lng: station.lon })
            this.markers.push({
              lat: station.lat,
              lng: station.lon,
              label: station.stopLetter,
              title: station.name,
              clicked: function() {
                this.asyncInfo = _thisx._tflService
                .getArrivals( station.id)
                .map(x => _.sortBy(x, y => y.timeToStation))
              },
              asyncInfo: Observable.of(null)
            });
          });
        });
        this.polygons.push({ path: path });
    });
  }

  displayFn(item: TflRouteSearchMatch): string {
      return item ? item.lineName : '';
  }

  onChange(item: TflRouteSearchMatch) {
    // console.log('onChange', item);
    this.selectLine(item);
    this.outbound = false;
  }

  toggleOutbound() {
    this.outbound = !this.outbound;
    this.selectLine(this.selected);
  }

}

export class StationDatabase {
  dataChange: BehaviorSubject<TflMatchedStop[]> = new BehaviorSubject<TflMatchedStop[]>([]);
  get data(): TflMatchedStop[] { return this.dataChange.value; }

  addStation(station: TflMatchedStop) {
    const copiedData = this.data.slice();
    copiedData.push(station);
    this.dataChange.next(copiedData);
  }

  clear() {
    this.dataChange = new BehaviorSubject<TflMatchedStop[]>([]);
  }
}

export class StationDataSource extends DataSource<any> {

  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _database: StationDatabase) {
    super();
  }

  clear() {
    this._database.clear();
  }

  connect(): Observable<TflMatchedStop[]> {
    const displayDataChanges = [
      this._database.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._database.data.slice().filter((item: TflMatchedStop) => {
        const searchStr = (item.name).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });
    });
  }

  // connect(): Observable<TflMatchedStop[]> {
  //   return this._database.dataChange;
  // }

  disconnect() {}
}
