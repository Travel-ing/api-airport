const axios = require("axios");

class clientApi {
  static url;
  static route;
  static key;

  constructor(route) {
    clientApi.url = process.env.OPEN_WEATHER_ROUTE;
    clientApi.key = process.env.OPEN_WEATHER_KEY;
    clientApi.route = route;
  }
  async get(query) {
    return await axios
      .get(`${clientApi.url}${clientApi.route}${query}&appid=${clientApi.key}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      });
  }
}

module.exports = { clientApi };
