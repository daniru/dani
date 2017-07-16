import * as _ from 'lodash';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TflLine, TflMode } from './../../services/models/index';
import { TflService } from './../../services/tfl.service';

@Component({
  selector: 'dr-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.scss', '../../assets/line-colours.scss', '../../assets/line-status.scss']
})
export class StatusPanelComponent implements OnInit {

  @Input() modes: TflMode[];
  stream: Observable<TflLine[]>

  constructor(private _tflService: TflService) { }

  ngOnInit() {
    this.stream = this._tflService.getStatus(this.modes)
      .map((statuses: TflLine[]) => {
        return _.sortBy(statuses, (s: any) => {
          return s.lineStatuses[0].statusSeverity === 10 ? 100 : s.lineStatuses[0].statusSeverity;
        });
      });
  }

}
