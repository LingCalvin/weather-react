/**
 * Wraps `navigator.geolocation.getCurrentPosition()` in a Promise.
 */
function getCurrentPosition(): Promise<GeolocationPosition> {
  return new Promise<GeolocationPosition>((res, rej) =>
    navigator.geolocation.getCurrentPosition(res, rej)
  );
}

/**
 * Provides convenience wrappers for function of `navigator.geolocation`.
 */
const geolocationService = {
  getCurrentPosition,
};

export default geolocationService;
