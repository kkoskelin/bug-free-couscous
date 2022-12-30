import { PinNearMe } from '../types/PinNearMe';
import { UnitName } from '../types/Units';
import { useAppState } from '../presenter/presenter';

import React from 'react';

interface PinProps {
  src: PinNearMe;
  units: UnitName;
}

const PinDetails = (props: PinProps) => {
  const { src, units } = props;
  return (
    <div className="border-top border-2 border-white">
      <strong>{src.name}</strong>
      <ul>
        <li>
          Distance: {src.distance} {units}
        </li>
        <li>Bearing: {src.bearing}</li>
      </ul>
    </div>
  );
};
export const CurrentLocation = () => {
  return <p>Hi</p>;
};

export const XCurrentLocation = () => {
  const { locationString, surroundings, units } = useAppState();
  return (
    <div>
      {locationString}
      <ul>
        {surroundings.map((pin: PinNearMe) => (
          <PinDetails src={pin} key={pin.name} units={units} />
        ))}
      </ul>
    </div>
  );
};
