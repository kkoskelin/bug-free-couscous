import { Pin } from './Pin';
import { PinNearMe } from './PinNearMe';
import { Position } from './Position';
import { UnitName } from './Units';

export type State = {
  currentPage: string;
  currentLocation?: Position;
  locationString?: string;
  pins?: Pin[];
  error?: string;
  surroundings?: PinNearMe[];
  units: UnitName;
};
