const geolocation = {
  /**
   * Wraps `navigator.geolocation.getCurrentPosition()` in a Promise.
   */
  getCurrentPosition: () =>
    new Promise<GeolocationPosition>((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej)
    ),
};

export default geolocation;
