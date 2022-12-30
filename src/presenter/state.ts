import { State } from '../types/State';
import { derivedState } from './derivedState';
import { pins } from './pins';

export const state: State = {
  currentLocation: {
    heading: 0,
    latitude: 45.863275,
    longitude: -89.225804,
  },
  currentPage: '',
  pins,
  units: 'yards',
  ...derivedState,
};
