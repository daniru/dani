import { TflStreet } from './tfl-street';
import { TflGeometry } from './tfl-geometry';

export class TflRoadDisruption {
    $type: string;
    id: string;
    url: string;
    point: string;
    severity: string;
    ordinal: number;
    category: string;
    subCategory: string;
    comments: string;
    currentUpdate: string;
    currentUpdateDateTime: string;
    corridorIds: string[];
    startDateTime: string;
    endDateTime: string;
    lastModifiedTime: string;
    levelOfInterest: string;
    location: string;
    status: string;
    geography: TflGeometry;
    geometry: TflGeometry;
    streets: TflStreet[];
    isProvisional: boolean;
    hasClosures: boolean;
    roadDisruptionLines: any[];
    roadDisruptionImpactAreas: any[];
    recurringSchedules: any[];
}
