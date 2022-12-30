import { CurrentLocation } from '../views/CurrentLocation';
import { LoadingTemplate } from '../views/LoadingTemplate';
import { useAppState } from '../presenter/presenter';
import React from 'react';

export const CurrentPage = () => {
  const { currentPage } = useAppState();
  return (
    <>
      {currentPage == 'Location' && <CurrentLocation />}
      {currentPage == 'Loading' && <LoadingTemplate />}
    </>
  );
};
