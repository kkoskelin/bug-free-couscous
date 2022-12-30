import { Pin } from './Pin';

export type PinNearMe = Pin & {
  distance: number;
  bearing: number;
};
