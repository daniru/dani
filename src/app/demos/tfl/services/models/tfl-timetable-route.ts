import { TflSchedule } from './tfl-schedule';
import { TflStationInterval } from './tfl-station-interval'

export class TflTimetableRoute {
    $type: string;
    stationIntervals: TflStationInterval[];
    schedules: TflSchedule[]
}
