import { TflStreetSegment } from './tfl-street-segment';

export class TflStreet {
    $type: string;
    name: string;
    closure: string;
    directions: string;
    segments: TflStreetSegment[];
    sourceSystemId: number;
    sourceSystemKey: string;
}
