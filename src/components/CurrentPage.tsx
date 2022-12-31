import { CurrentLocation } from '../views/CurrentLocation';
import { LoadingTemplate } from '../views/LoadingTemplate';
import { useAppState } from '../presenter/presenter';
import React from 'react';

export const CurrentPage = () => {
  const { currentPage, error } = useAppState();
  return (
    <>
      {error && (
        <p>
          <strong>{error}</strong>
        </p>
      )}
      {currentPage == 'Location' && <CurrentLocation />}
      {currentPage == 'Loading' && <LoadingTemplate />}
    </>
  );
};
