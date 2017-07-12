import { TflMessage } from './tfl-message'

export class TflFaresSection {
    $type: string;
    header: string;
    index: number;
    rows: any[];
    messages: TflMessage[];
}
