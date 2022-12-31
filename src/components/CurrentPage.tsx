import { CurrentLocation } from '../views/CurrentLocation';
import { LoadingTemplate } from '../views/LoadingTemplate';
import { useActions, useAppState } from '../presenter/presenter';
import React from 'react';

export const CurrentPage = () => {
  const { currentPage, error } = useAppState();
  const { addPin, clearPins } = useActions();
  return (
    <>
      {error && (
        <p>
          <strong>{error}</strong>
        </p>
      )}
      <button onClick={addPin as () => void}>Drop a Pin</button>
      {currentPage == 'Location' && <CurrentLocation />}
      {currentPage == 'Loading' && <LoadingTemplate />}
      <button onClick={clearPins as () => void}>Clear Pins</button>
    </>
  );
};
