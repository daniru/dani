import { TflKnownJourney } from './tfl-known-jorney';
import { TflPeriod } from './tfl-period';

export class TflSchedule {
    $type: string;
    name: string;
    knownJourneys: TflKnownJourney[];
    firstJourney: TflKnownJourney;
    lastJourney: TflKnownJourney;
    periods: TflPeriod[];
}
