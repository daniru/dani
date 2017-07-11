import { TflSegment } from './tfl-segment';

export class TflStreet {
    $type: string;
    name: string;
    closure: string;
    directions: string;
    segments: TflSegment[];
    sourceSystemId: number;
    sourceSystemKey: string;
}
