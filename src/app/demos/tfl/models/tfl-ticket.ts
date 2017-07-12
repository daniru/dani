import { TflMessage } from './tfl-message';
import { TflTicketTime } from './tfl-ticket-time';
import { TflTicketType } from './tfl-ticket-type';

export class TflTicket {
    $type: string;
    passengerType: string;
    ticketType: TflTicketType;
    cost: string;
    description: string;
    mode: string;
    displayOrder: number;
    messages: TflMessage[];
}
