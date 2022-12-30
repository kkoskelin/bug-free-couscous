const getCurrentPosition = async (
  geoOptions?: PositionOptions,
): Promise<GeolocationPosition> => {
  if (!navigator.geolocation) {
    throw new Error('geolocation unavailable');
  }
  return await new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, geoOptions),
  );
};

export const geolocation = {
  getCurrentPosition,
};
