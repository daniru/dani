import { TflStopLine } from './tfl-stop-line' ;
import { TflLineGroup } from './tfl-line-group' ;
import { TflLineModeGroup } from './tfl-line-mode-group' ;
import { TflProperty } from './tfl-property' ;

export class TflStopPoint {
    $type: string;
    naptanID: string;
    indicator: string;
    stopLetter: string;
    modes: string[];
    icsCode: string;
    stopType: string;
    stationNaptan: string;
    lines: TflStopLine[];
    lineGroup: TflLineGroup;
    lineModeGroups: TflLineModeGroup[];
    status: boolean;
    id: string;
    commonName: string;
    placeType: string;
    additionalProperties: TflProperty[];
    children: any[];
    lat: number;
    lon: number;
}
