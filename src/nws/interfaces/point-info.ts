export interface PointInfo {
  coordinates: [number, number];
  gridId: string;
  gridX: number;
  gridY: number;
  timeZone: string;
  radarStation: string;
  relativeLocation: RelativeLocation;
}

export interface RelativeLocation {
  city: string;
  state: string;
}
