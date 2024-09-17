export interface GeolocationDataType {
  latitude: number;
  longitude: number;
  timezone: string;
}

function getGeolocation(): Promise<GeolocationDataType> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

          resolve({
            latitude,
            longitude,
            timezone
          });
        },
        (error) => {
          reject(`Error getting location: ${error.message}`);
        }
      );
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
}

export default getGeolocation;
