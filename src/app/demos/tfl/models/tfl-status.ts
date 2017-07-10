export class TflStatus {
    $type: string;
    id: string;
    name: string;
    modeName: string;
    disruptions: any[];
    created: string;
    modified: string;
    lineStatuses: any[];
    routeSelections: any[]
    serviceTypes: any[];
    crowding: any;
}
