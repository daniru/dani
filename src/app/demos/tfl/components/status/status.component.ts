import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TflLine, TflMode } from '../../services/models/index';
import { TflService } from '../../services/tfl.service';

@Component({
  selector: 'dr-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss', '../../assets/line-colours.scss', '../../assets/line-status.scss']
})
export class StatusComponent implements OnInit {

  stream: Observable<TflLine[]>

  modesTube = [ TflMode.tube, TflMode.overground, TflMode.dlr, TflMode.tflrail ];
  modesTrain = [ TflMode.nationalRail ];
  modesRiver = [ TflMode.riverBus, TflMode.riverTour ];
  modesBus = [ TflMode.bus];
  modesOthers = [ TflMode.cableCar, TflMode.coach, TflMode.cycle, TflMode.cycleHire, TflMode.interchangeKeepSitting,
    TflMode.interchangeSecure, TflMode.replacementBus, TflMode.taxi, TflMode.tram, TflMode.walking ];

  constructor(private _tflService: TflService) { }

  ngOnInit() {
    // this.stream = this._tflService.getAllStatus()
    //   .map((statuses: TflLine[]) => {
    //     return _.sortBy(statuses, (s: any) => {
    //       return s.lineStatuses[0].statusSeverity === 10 ? 100 : s.lineStatuses[0].statusSeverity;
    //     });
    //   });
  }

}
