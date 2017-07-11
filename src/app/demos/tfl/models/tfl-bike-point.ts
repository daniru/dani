import { TflAdditionalProperty } from './tfl-additional-property';

export class TflBikePoint {
    $type: string;
    id: string;
    url: string;
    commonName: string;
    placeType: string;
    additionalProperties: TflAdditionalProperty[];
    children: any[];
    childrenUrl: any[];
    lat: number;
    lon: number;
}

