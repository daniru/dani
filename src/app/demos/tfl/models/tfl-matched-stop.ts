import { TflIdentifier } from './tfl-identifier';

export class TflMatchedStop {
    $type: string;
    parentId: string;
    stationId: string;
    icsId: string;
    topMostParentId: string;
    modes: string[];
    stopType: string;
    zone: string;
    hasDisruption: boolean;
    lines: TflIdentifier[];
    status: boolean;
    id: string;
    name: string;
    lat: number
    lon: number;
}
