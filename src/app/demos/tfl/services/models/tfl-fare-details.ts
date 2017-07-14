import { TflMessage } from './tfl-message';
import { TflTicket } from './tfl-ticket';

export class TflFareDetails {
    $type: string;
    startDate: string;
    endDate: string;
    passengerType: string;
    from: string;
    to: string;
    fromStation: string;
    toStation: string;
    displayName: string;
    displayOrder: number;
    routeDescription: string;
    specialFare: boolean;
    throughFare: boolean;
    isTour: boolean;
    ticketsAvailable: TflTicket[];
    messages: TflMessage[];
}
