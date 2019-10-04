export function selectCity(city) {
  return {
    type: 'CITY_ACTIVATED',
    payload: city
  };
}
