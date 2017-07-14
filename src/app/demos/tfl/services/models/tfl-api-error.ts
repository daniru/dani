export class TflApiError {
    $type: string;
    timestampUtc: string;
    exceptionType: string;
    httpStatusCode: number;
    httpStatus: string;
    relativeUri: string;
    message: string;
}
