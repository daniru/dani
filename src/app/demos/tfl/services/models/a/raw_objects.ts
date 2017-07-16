
export class TflPoint {
    lat: number;
    lon: number;
}

export class TflSearchMatch extends TflPoint {
    id: string;
    url: string;
    name: string;
}

export class AccidentDetail {
    id: number;
    lat: number;
    lon: number;
    location: string;
    date: string;
    severity: string;
    borough: string;
    casualties: Casualty[];
    vehicles: Vehicle[];
}

export class Casualty {
    age: number;
    class: string;
    severity: string;
    mode: string;
    ageBand: string;
}

export class Vehicle {
    type: string;
}

export class AccidentStatsOrderedSummary {
    year: number;
    borough: string;
    accidents: number;
}

export class TflPlace extends TflPoint {
    id: string;
    url: string;
    commonName: string;
    distance: number;
    placeType: string;
    additionalProperties: AdditionalProperties[];
    children: TflPlace[];
    childrenUrls: string[];
}

export class AdditionalProperties {
    category: string;
    key: string;
    sourceSystemKey: string;
    value: string;
    modified: string;
}

export class CycleSuperhighway {
    id: string;
    label: string;
    labelShort: string;
    geography: DbGeography;
    segmented: boolean;
    modified: string;
}

export class DbGeography {
    geography: DbGeographyWellKnownValue;
}

export class DbGeographyWellKnownValue {
    coordinateSystemId: number;
    wellKnownText: string;
    wellKnownBinary: string;
}


export class Fare {
    id: number;
    passengerType: string;
    validFrom: string;
    validUntil: string;
    ticketTime: string;
    ticketType: string;
    cost: string;
    cap: number;
    description: string;
    zone: string;
    mode: string;
}

export class FaresSection {
    header: string;
    index: number;
    rows: FareDetails[];
    messages: { type: 'array', items: { $ref: '#/definitions/Message' } }
}

export class FareDetails {
    boundsId: number;
    startDate: string;
    endDate: string;
    mode: string;
    passengerType: string;
    from: string;
    to: string;
    fromStation: string;
    toStation: string;
    via: string;
    routeCode: string;
    displayName: string;
    displayOrder: number;
    routeDescription: string;
    validatorInformation: string;
    operator: string;
    specialFare: boolean;
    throughFare: boolean;
    isTour: boolean;
    ticketsAvailable: Ticket[];
    messages: Message[];
}

export class Message {
    bulletOrder: number;
    header: boolean;
    messageText: string;
    linkText: string;
    url: string;
}

export class Ticket {
    passengerType: string;
    ticketType: TicketType;
    ticketTime: TicketTime;
    cost: string;
    description: string;
    mode: string;
    displayOrder: number;
    messages: Message[];
}

export class TicketType {
    type: string;
    description: string;
}

export class TicketTime {
    type: string;
    description: string;
}

export class FareBounds {
    id: number;
    from: string;
    to: string;
    via: string;
    routeCode: string;
    description: string;
    displayName: string;
    operator: string;
    displayOrder: number;
    isPopularFare: boolean;
    isPopularTravelCard: boolean;
    isTour: boolean;
    messages: Message[];
}

export class FaresPeriod {
    id: number;
    startDate: string;
    viewableDate: string;
    endDate: string;
    isFuture: boolean;
}

export class FaresMode {
    id: number;
    name: string;
    description: string;
}

export class PassengerType {
    type: string;
    description: string;
    displayName: string;
    displayOrder: number;
}

export class Coordinate {
    longitude: number;
    latitude: number;
    easting: number;
    northing: number;
    xCoord: number;
    yCoord: number;
}

export class GeoCodeSearchMatch extends TflSearchMatch {
        types: string;
        address: string;
        id: string;
        url: string;
        name: string;
        lat: number;
        lon: number;
}

export class ContentSearchMatch extends TflSearchMatch {
    date: string;
    ext: string;
    highlights: string[];
    lastmodified: string;
    score: number;
}

export class Mode {
    isTflService: boolean;
    isFarePaying: boolean;
    isScheduledService: boolean;
    modeName: string;
}

export class ItineraryResult {
    journeys: Journey[];
    lines: TflLine[];
    cycleHireDockingStationData: JourneyPlannerCycleHireDockingStationData;
    stopMessages: string[];
    recommendedMaxAgeMinutes: number;
    searchCriteria: SearchCriteria;
    journeyVector: JourneyVector;
}

export class Journey {
    startDateTime: string;
    duration: number;
    arrivalDateTime: string;
    legs: Leg[];
}

export class TflLine {
    id: string;
    name: string;
    modeName: string;
    disruptions: TflDisruption[];
    created: string;
    modified: string;
    lineStatuses: TflLineStatus[];
    routeSections: TflMatchedRoute[];
    serviceTypes: TflLineServiceTypeInfo[];
    crowding: Crowding;
}

export class JourneyPlannerCycleHireDockingStationData {
    originNumberOfBikes: number;
    destinationNumberOfBikes: number;
    originNumberOfEmptySlots: number;
    destinationNumberOfEmptySlots: number;
    originId: string;
    destinationId: string;
}

export class SearchCriteria {
    dateTime: string;
    dateTimeType: DateTimeType;
    timeAdjustments: TimeAdjustments;
}

export enum DateTimeType { 'Arriving', 'Departing' }

export class JourneyVector {
    from: string;
    to: string;
    via: string;
    uri: string;
}

export class Leg {
    duration: number;
    speed: string;
    instruction: Instruction;
    obstacles: Obstacle[];
    departureTime: string;
    arrivalTime: string;
    departurePoint: TflPoint;
    arrivalPoint: TflPoint;
    path: Path;
    routeOptions: RouteOption[];
    mode: Identifier;
    disruptions: TflDisruption[];
    plannedWorks: PlannedWork[];
    distance: number;
    isDisrupted: boolean;
    hasFixedLocations: boolean;
}

export class TflDisruption {
    category: DisruptionCategory;
    type: string;
    categoryDescription: string;
    description: string;
    additionalInfo: string;
    created: string;
    lastUpdate: string;
    affectedRoutes: RouteSection[];
    affectedStops: TflStopPoint[];
    isBlocking: boolean;
    isWholeLine: boolean;
    closureText: string;
}

export enum DisruptionCategory {
    Undefined = 'Undefined',
    RealTime = 'RealTime',
    PlannedWork = 'PlannedWork',
    Information = 'Information',
    Event = 'Event',
    Crowding = 'Crowding',
    StatusAlert = 'StatusAlert'
}

export class TflLineStatus {
    id: number;
    lineId: string;
    statusSeverity: LineStatusSeverity | number;
    statusSeverityDescription: string;
    reason: string;
    created: string;
    modified: string;
    validityPeriods: TflValidityPeriod[];
    disruption: TflDisruption;
}

export enum LineStatusSeverity {
    PartClosure = 5,
    GoodService = 10,
    ServiceClosed = 20
}

export class TflMatchedRoute {
        routeCode: string;
        name: string;
        direction: string;
        originationName: string;
        destinationName: string;
        originator: string;
        destination: string;
        serviceType: string;
}

export class TflLineServiceTypeInfo {
    name: string;
    uri: string;
}

export class Crowding {
    passengerFlows: PassengerFlow[];
    trainLoadings: TrainLoading[];
}

export class TimeAdjustments {
    earliest: TimeAdjustment;
    earlier: TimeAdjustment;
    later: TimeAdjustment;
    latest: TimeAdjustment;
}

export class Instruction {
    summary: string;
    detailed: string;
    steps: InstructionStep[];
}

export class Obstacle {
    type: string;
    incline: string;
    stopId: number;
    position: string;
}

export class Path {
    lineString: string;
    stopPoints: Identifier[];
    elevation: JpElevation[];
}

export class RouteOption {
    id: string;
    name: string;
    directions: string[];
    lineIdentifier: Identifier;
}

export class Identifier {
    id: string;
    name: string;
    uri: string;
    fullName: string;
    type: string;
    crowding: Crowding;
}

export class PlannedWork {
    id: string;
    description: string;
    createdDateTime: string;
    lastUpdateDateTime: string;
}

export class RouteSection {
    id: string;
    lineId: string;
    routeCode: string;
    name: string;
    direction: string;
    lineString: string;
    originationName: string;
    destinationName: string;
    routeSectionNaptanEntrySequence: RouteSectionNaptanEntrySequence[];
}

export class TflStopPoint extends TflPlace {
    naptanId: string;
    platformName: string;
    indicator: string;
    stopLetter: string;
    modes: string[];
    icsCode: string;
    smsCode: string;
    stopType: string;
    stationNaptan: string;
    accessibilitySummary: string;
    hubNaptanCode: string;
    lines: Identifier[];
    lineGroup: LineGroup[];
    lineModeGroups: LineModeGroup;
    fullName: string;
    naptanMode: string;
    status: boolean;
}

export class CanalPlacemark {
    coordinates: string;
    id: number;
    name: string;
    placemarkId: string;
}

export class TflValidityPeriod {
    fromDate: string;
    toDate: string;
    isNow: boolean;
}

export class PassengerFlow {
        timeSlice: string;
        value: number;
}

export class TrainLoading {
    line: string;
    lineDirection: string;
    platformDirection: string;
    direction: string;
    naptanTo: string;
    timeSlice: string;
    value: TrainLoadingValue
}

export enum TrainLoadingValue {
    VeryQuiet = 1,
    Quiet = 2,
    FairlyBusy = 3,
    Busy = 4,
    VeryBusy = 5,
    ExceptionallyBusy = 6
}

export class TimeAdjustment {
    date: string;
    time: string;
    timeIs: string;
    uri: string;
}

export class InstructionStep {
    description: string;
    turnDirection: string;
    streetName: string;
    distance: number;
    cumulativeDistance: number;
    skyDirection: number;
    skyDirectionDescription: SkyDirectionDescription;
    cumulativeTravelTime: number;
    latitude: number;
    longitude: number;
    pathAttribute: PathAttribute;
    descriptionHeading: string;
    trackType: TrackType;
}

export enum SkyDirectionDescription {
    North = 'North',
    NorthEast = 'NorthEast',
    East = 'East',
    SouthEast = 'SouthEast',
    South = 'South',
    SouthWest = 'SouthWest',
    West = 'West',
    NorthWest = 'NorthWest'
}

export enum TrackType {
     CycleSuperHighway = 'CycleSuperHighway',
     CanalTowpath = 'CanalTowpath',
     QuietRoad = 'QuietRoad',
     ProvisionForCyclists = 'ProvisionForCyclists',
     BusyRoads = 'BusyRoads',
     None = 'None',
     PushBike = 'PushBike'
}

export class JpElevation {
    distance: number;
    startLat: number;
    startLon: number;
    endLat: number;
    endLon: number;
    heightFromPreviousPoint: number;
    gradient: number;
}

export class RouteSectionNaptanEntrySequence {
    ordinal: number;
    stopPoint: TflStopPoint;
}

export class LineGroup {
    naptanIdReference: string;
    stationAtcoCode: string;
    lineIdentifier: string[];
}

export class LineModeGroup {
    modeName: string;
    lineIdentifier: string[];
}

export class PathAttribute {
    name: string;
    value: string;
}

export class StatusSeverity {
    modeName: string;
    severityLevel: number;
    description: string;
}

export class TflRouteSequence {
    lineId: string;
    lineName: string;
    direction: string;
    isOutboundOnly: boolean;
    mode: string;
    lineStrings: string[];
    stations: TflMatchedStop[];
    stopPointSequences: TflStopPointSequence[];
    orderedLineRoutes: OrderedRoute[];
}

export class TflMatchedStop extends TflSearchMatch {
    routeId: number;
    parentId: string;
    stationId: string;
    icsId: string;
    topMostParentId: string;
    direction: string;
    towards: string;
    modes: string[];
    stopType: string;
    stopLetter: string;
    zone: string;
    accessibilitySummary: string;
    hasDisruption: boolean;
    lines: Identifier[];
    status: boolean;
}

export class TflStopPointSequence {
    lineId: string;
    lineName: string;
    direction: string;
    branchId: number;
    nextBranchIds: number[];
    prevBranchIds: number[];
    stopPoint: TflMatchedStop[];
    serviceType: TflServiceType;
}

export enum TflServiceType {
    Regular = 'Regular',
    Night = 'Night'
}

export class OrderedRoute {
    name: string;
    naptanIds: string[];
    serviceType: string;
}

export class DateRange {
    startDate: string;
    endDate: string;
}

export class RouteSearchResponse {
    input: string;
    searchMatches: RouteSearchMatch[];
}

export class RouteSearchMatch {
    lineId: string;
    mode: string;
    lineName: string;
    lineRouteSection: LineRouteSection[];
    matchedRouteSections: MatchedRouteSections[];
    matchedStops: TflMatchedStop[];
    id: string;
    url: string;
    name: string;
    lat: number;
    lon: number;
}

export class LineRouteSection {
    routeId: number;
    direction: string;
    destination: string;
    fromStation: string;
    toStation: string;
    serviceType: string;
    vehicleDestinationText: string;
}

export class MatchedRouteSections {
    id: number;
}

export class TimetableResponse {
    lineId: string;
    lineName: string;
    direction: string;
    pdfUrl: string;
    stations: TflMatchedStop[];
    stops: TflMatchedStop[];
    timetable: Timetable;
    disambiguation: Disambiguation;
    statusErrorMessage: string;
}

export class Timetable {
    departureStopId: string;
    routes: TimetableRoute[];
}

export class Disambiguation {
    disambiguationOptions: DisambiguationOption[];
}

export class TimetableRoute {
    stationIntervals: StationInterval[];
    schedules: Schedule[];
}

export class DisambiguationOption {
    description: string;
    uri: string;
}

export class StationInterval {
    id: string;
    intervals: Interval[];
}

export class Schedule {
    name: string;
    knownJourneys: KnownJourney[];
    firstJourney: KnownJourney;
    lastJourney: KnownJourney;
    periods: Period[];
}

export class Interval {
    stopId: string;
    timeToArrival: number;
}

export class KnownJourney {
    hour: string;
    minute: string;
    intervalId: number;
}

export class Period {
    type: PeriodType;
    fromTime: TwentyFourHourClockTime;
    toTime: TwentyFourHourClockTime;
    frequency: ServiceFrequency;
}

export enum PeriodType {
    Normal = 'Normal',
    FrequencyHours = 'FrequencyHours',
    FrequencyMinutes = 'FrequencyMinutes',
    Unknown = 'Unknown'
}

export class TwentyFourHourClockTime {
    hour: string;
    minute: string;
}

export class ServiceFrequency {
    lowestFrequency: number;
    highestFrequency: number;
}

export class Prediction {
    id: string;
    operationType: number;
    vehicleId: string;
    naptanId: string;
    stationName: string;
    lineId: string;
    lineName: string;
    platformName: string;
    direction: string;
    bearing: string;
    destinationNaptanId: string;
    destinationName: string;
    timestamp: string;
    timeToStation: number;
    currentLocation: string;
    towards: string;
    expectedArrival: string;
    timeToLive: string;
    modeName: string;
    timing: PredictionTiming;
}

export class ActiveServiceType {
    mode: string;
    serviceType: string;
}

export class PredictionTiming {
    countdownServerAdjustment: string;
    source: string;
    insert: string;
    read: string;
    sent: string;
    received: string;
}


export class CarParkOccupancy {
    id: string;
    bays: Bay[];
    name: string;
    carParkDetailsUrl: string;
}

export class Bay {
    bayType: string;
    bayCount: number;
    free: number;
    occupied: number;
}

export class PlaceCategory {
    category: string;
    availableKeys: string[];
}

export class SearchResponse {
    query: string;
    from: number;
    page: number;
    pageSize: number;
    provider: string;
    total: number;
    matches: TflSearchMatch[];
    maxScore: number;
}

export class AddressMatch extends TflSearchMatch {
    addressLineOne: string;
    addressLineThree: string;
    addressLineTwo: string;
    buildingName: string;
    buildingNumber: string;
    country: string;
    county: string
    postCode: string;
    subBuildingNumber: string;
    town: string;
}

export class PostcodeInput {
    postcode: string;
}

export class PlacePolygon {
    geoPoints: GeoPoint[];
    commonName: string;
}

export class GeoPoint {
    lat: number;
    lon: number;
}

export class GeoPointBBox {
    swLat: number;
    swLon: number;
    neLat: number;
    neLon: number;
}

export class RoadCorridor {
    id: string;
    displayName: string;
    group: string;
    statusSeverity: string;
    statusSeverityDescription: string;
    bounds: string;
    envelope: string;
    statusAggregationStartDate: string;
    statusAggregationEndDate: string;
    url: string;
}

export class DateRangeNullable {
    startDate: string;
    endDate: string;
}

export class RoadDisruption {
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
    geography: DbGeography;
    geometry: DbGeography;
    streets: Street[];
    isProvisional: boolean;
    hasClosures: boolean;
    linkText: string;
    linkUrl: string;
    roadProject: RoadProject;
    publishStartDate: string;
    publishEndDate: string;
    timeFrame: string;
    roadDisruptionLines: RoadDisruptionLine[];
    roadDisruptionImpactAreas: RoadDisruptionImpactArea[];
    recurringSchedules: RoadDisruptionSchedule[]
}

export class Street {
    name: string;
    closure: string
    directions: string;
    segments: StreetSegment[];
    sourceSystemId: number;
    sourceSystemKey: string;
}

export class RoadProject {
    projectId: string;
    schemeName: string;
    projectName: string;
    projectDescription: string;
    projectPageUrl: string;
    consultationPageUrl: string;
    consultationStartDate: string;
    consultationEndDate: string;
    constructionStartDate: string;
    constructionEndDate: string;
    boroughsBenefited: string;
    cycleSuperhighwayId: string;
    phase: ProjectPhaseEnum;
    contactName: string;
    contactEmail: string;
    externalPageUrl: string;
    projectSummaryPageUrl: string;
}
export enum ProjectPhaseEnum {
    Unscoped = 'Unscoped',
    Concept = 'Concept',
    ConsultationEnded = 'ConsultationEnded',
    Consultation = 'Consultation',
    Construction = 'Construction',
    Complete = 'Complete'
}

export class RoadDisruptionLine {
    id: number;
    roadDisruptionId: string;
    isDiversion: boolean;
    multiLineString: DbGeography[];
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
}

export class RoadDisruptionImpactArea {
    id: number;
    roadDisruptionId: string;
    polygon: DbGeography;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
}

export class RoadDisruptionSchedule {
    startTime: string;
    endTime: string;
}

export class StreetSegment {
    toid: string;
    lineString: string;
    sourceSystemId: number;
    sourceSystemKey: string;
}

export class Redirect {
    shortUrl: string;
    longUrl: string;
    active: boolean;
}

export class StopPointCategory {
    category: string;
    availableKeys: string[];
}

export class TflLineServiceType {
    lineName: string;
    lineSpecificServiceTypes: TflLineSpecificServiceType[];
}

export class TflLineSpecificServiceType {
    serviceType: TflLineServiceTypeInfo;
    stopServesServiceType: boolean;
}

export class StopPointRouteSection {
    naptanId: string;
    lineId: string;
    mode: string;
    validFrom: string;
    validTo: string;
    direction: string;
    routeSectionName: string;
    lineString: string;
    isActive: boolean;
    serviceType: string;
    vehicleDestinationText: string;
    destinationName: string;
}

export class DisruptedPoint {
    atcoCode: string;
    fromDate: string;
    toDate: string;
    description: string;
    commonName: string;
    type: string;
    mode: string;
    stationAtcoCode: string;
    appearance: string;
    additionalInformation: string;
}

export class DisruptedPointFamily {
    children: DisruptedPointFamily[];
    disruptions: DisruptedPoint[];
    naptanId: string;
}


export class StopPointsResponse {
    centrePoint: number[];
    stopPoints: TflStopPoint[];
    pageSize: number;
    total: number;
    page: number;
}

export class RecommendationResponse {
    recommendations: Recommendation[];
}

export class Recommendation {
    id: number;
    rule: number;
    rank: number;
    fareType: string;
    product: string;
    ticketType: string;
    ticketTime: string;
    productType: string;
    discountCard: string;
    zones: string;
    cost: string;
    priceDescription: string;
    priceComparison: string;
    recommendedTopUp: string;
    notes: Message[];
    keyFeatures: Message[];
    gettingYourTicket: Message[];
    singleFare: number;
}

export class EmissionsSurchargeVehicle {
    vrm: string;
    type: string;
    make: string;
    model: string;
    colour: string;
    compliance: EmissionsSurchargeCompliance;
}

export enum EmissionsSurchargeCompliance {
    Compliant = 'Compliant',
    Exempt = 'Exempt',
    NotCompliant = 'NotCompliant'
}

export class ApiVersionInfo {
    label: string;
    timestamp: string;
    version: string;
    assemblies: string[];
}

// not found in declarations
export class CurrentForecast {}
export class DisruptedStreetSegment {}
export class DisruptionOverride {}
export class Distance {
    key: string;
    value: string;
}
export class EtlRequest {}
export class EtlSubTaskMessage {}
export class EtlTask {}
export class EtlTaskBatch {}
export class EtlTaskBatchItem {}
export class GeoJsonObject {
    coordinates: any[];
    type: string;
}
export class LineInfo {}
export class LineGroupSection {}
export class LineGroupType {}
export class LineGroupTypeInfo {}
export class LineStationParameter {}
export class LondonAirForecast {}
export class MissingNaptan {}
export class OperationalInformation {}
export class Operator {}
export class PlaceSearchMatch {}
export class PlacesResponse {}
export class PredictionStats {}
export class ReferencedStop {}
export class RoadDisruptionTdmExtension {}
export class RouteInfo {}
export class RouteMatch {}
export enum SearchCategory {}
export class Service {}
export class ServiceInfo {}
export class StreetMatch {}
export class StreetResponse {}
export class Subscription {}
export enum TicketAssistanMeta {}
export class TimeTableJourney {}
export enum TimeTablePeriodType {}
export class TradingNames {}
export class UrlList {}
export class Waterway {}
export class WaterwayDetail {}
export class WaterwayLineString {}
export enum AgeGroup { 'Adult', 'Age11To15', 'Age16To18', 'Age5To10', 'ChildUnder4', 'NotSet' }
export enum DiscountType { 'Apprentice', 'BusTram', 'JobCenter', 'None', 'NotSet', 'Student' }
export enum RecommendationPeriod { 'FiveDays', 'FourDays', 'NotSet', 'OneDay', 'OneMonth', 'OneYear', 'SevenDays', 'SixDays', 'ThreeDays', 'TwoDays' }
export class RecommendationRequest {}
export class RiverRoute {}
export class ContactlessPAYGCap {}
export class TravelCard {}
export class ZoneFare {}
export class ZoneScore {}
export class DisambiguationResult {}
export class FootPathElement {}
export class ImparedOptions {}
export class IndividualTransportOptions {}
export enum JourneyPlannerCommands { 'ChangeDest', '...' , 'TrupRetoure' }
export class JourneyResult {}
export class Location {}
export enum LocationType { 'Address', '...', 'StopId' }
export class MapItem {}
export enum MeansOfTransport { 'BikeAndRide', '...', 'Tube' }
export class PartialRoute {}
export class PublicTransportOptions {}
export class Route {}
export enum SearchParameterType { 'Boolean', '...', 'Value' }
