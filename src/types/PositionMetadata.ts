export interface PositionMetadata {
  timestamp?: number;
  accuracy?: number /* meters */;
  altitudeAccuracy?: number /* in meters */;
  heading?: number /* in degrees from true north */;
  speed?: number /* in meters-per-second */;
}
