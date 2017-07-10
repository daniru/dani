import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TflStatus } from './../../models/tfl-status';
import { TflService } from './../../services/tfl.service';

@Component({
  selector: 'dr-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss', '../../assets/line-colours.scss', '../../assets/line-status.scss']
})
export class StatusComponent implements OnInit {

  stream: Observable<TflStatus[]>

  constructor(private _tflService: TflService) { }

  ngOnInit() {
    this.stream = this._tflService.getAllStatus()
      .map((statuses: TflStatus[]) => {
        console.log(statuses);
        return _.sortBy(statuses, (s: any) => {
          return s.lineStatuses[0].statusSeverity === 10 ? 100 : s.lineStatuses[0].statusSeverity;
        });
      });
  }

}
