import { TflTwentyFourHourClockTime } from './tfl-twenty-four-hour-clock-time'

export class TflPeriod {
    $type: string;
    type: string;
    fromTime: TflTwentyFourHourClockTime;
    toTime: TflTwentyFourHourClockTime;
}
