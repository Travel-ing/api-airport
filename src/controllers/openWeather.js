const { clientApi } = require("../services/openWeather");

async function getWeatherByCoord(coordinate) {
  return await new clientApi("/weather").get(
    `?lat=${coordinate.latitude}&lon=${coordinate.longitude}`
  );
}

async function setDelay(weather) {
  let delay = 0;
  switch (weather.weather[0].main) {
    case "Thunderstorm":
      delay = 9000;
      break;
    case "Tornado":
      delay = 10800;
      break;
    case "Squall":
      delay = 9000;
      break;
  }
  switch (weather.weather[0].description) {
    case "Shower snow":
      delay = delay > 3600 ? delay : 3600;
      break;
    case "Heavy shower snow":
      delay = delay > 5400 ? delay : 5400;
      break;
    case "light intensity shower rain":
      delay = delay > 5400 ? delay : 5400;
      break;
    case "shower rain":
      delay = delay > 7200 ? delay : 7200;
      break;
    case "heavy intensity shower rain":
      delay = delay > 9000 ? delay : 9000;
      break;
    case "ragged shower rain":
      delay = delay > 7200 ? delay : 7200;
      break;
  }
  if (weather.visibility < 2000) {
    delay = 10800;
  }
  if (weather.wind.speed > 16 && weather.wind.speed < 22) {
    delay = 14400;
  }
  if (weather.wind.speed >= 22) {
    delay = 18000;
  }
  return delay;
}

module.exports = {
  getWeatherByCoord,
  setDelay,
};
