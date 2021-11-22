const BASE_API = "https://api.openweathermap.org/data/2.5/onecall";
const EXCLUDES = "exclude=current,minutely,alerts";
const UNITS = "units=metric";
const APP_ID = "appid=7ac66d1bd1a2cc3920e2ae5ef5557531";

export function getWeather(city) {
  const url = `${BASE_API}?lat=${city.lat}&lon=${city.lon}&${EXCLUDES}&${UNITS}&${APP_ID}`;

  return fetch(url);
}
