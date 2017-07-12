import { TflTimetable } from './tfl-timetable';
import { TflMatchedStop } from './tfl-matched-stop';

export class TflTimetableResponse {
    $type: string;
    lineId: string;
    lineName: string;
    direction: string;
    stations: TflMatchedStop[];
    stops: TflMatchedStop[];
    timetable: TflTimetable[];
}
