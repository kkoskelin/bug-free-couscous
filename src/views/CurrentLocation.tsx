import { PinNearMe } from '../types/PinNearMe';
import { UnitName } from '../types/Units';
import { useActions, useAppState } from '../presenter/presenter';

import React, { useEffect } from 'react';

interface PinProps {
  heading: number;
  src: PinNearMe;
  units: UnitName;
}

const PinDetails = (props: PinProps) => {
  const { heading, src, units } = props;
  return (
    <div className="border-left border-1 border-grey3 m-2 p-2">
      <strong>{src.name}</strong>
      <ul>
        <li>
          Distance: {src.distance} {units}
        </li>
        <li>
          Bearing: {src.bearing}°{' '}
          <span
            className="inline-block"
            style={{
              transform: `rotate(${Math.round(src.bearing - heading)}deg)`,
            }}
          >
            ↑
          </span>
        </li>
      </ul>
    </div>
  );
};

export const CurrentLocation = () => {
  const {
    currentLocation: { heading },
    locationString,
    surroundings,
    units,
  } = useAppState();
  const { updateLocation } = useActions();
  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    timer = setTimeout(updateLocation as () => void, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <pre>{locationString}</pre>
      <ul>
        {surroundings.map((pin: PinNearMe) => (
          <PinDetails
            src={pin}
            key={pin.name}
            units={units}
            heading={heading}
          />
        ))}
      </ul>
    </div>
  );
};
