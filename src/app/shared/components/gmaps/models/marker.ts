import { Observable } from 'rxjs/Observable';
export class Marker {
    lat: number;
    lng: number;
    label: string;
    title: string;

    clicked: () => void;

    asyncInfo: Observable<any[]>;
}
