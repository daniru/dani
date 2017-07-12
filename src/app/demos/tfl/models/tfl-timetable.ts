import { TflTimetableRoute } from './tfl-timetable-route' ;

export class TflTimetable {
    $type: string;
    departureStopId: string;
    routes: TflTimetableRoute[];
}
