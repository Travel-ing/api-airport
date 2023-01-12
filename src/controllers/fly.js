const { FlyModel } = require("../model/fly");
const controllerWeather = require("./openWeather");

async function getFlyById(id) {
  try {
    return await FlyModel.findById(id);
  } catch (error) {
    throw new Error("Impossible de récupérer le vol : " + id);
  }
}

async function createFly(body) {
  try {
    return await FlyModel.create(body);
  } catch (error) {
    throw new Error("Impossible de créer un vol");
  }
}
async function updateFly(id, body) {
  try {
    await FlyModel.findByIdAndUpdate(id, body);
    return getFlyById(id);
  } catch (error) {
    throw new Error("Impossible de modifier le vol : " + id);
  }
}
async function deleteFly(id) {
  try {
    return await FlyModel.findOneAndDelete({ _id: id });
  } catch (error) {
    throw new Error("Impossible de supprimer le vol : " + id);
  }
}

async function udpateDelayFinish(id, delay) {
  try {
    await FlyModel.findByIdAndUpdate(id, { "finish.delay": delay });
    return getFlyById(id);
  } catch (error) {
    throw new Error("Impossible de modifier le vol : " + id);
  }
}

async function udpateDelayStart(id, delay) {
  try {
    await FlyModel.findByIdAndUpdate(id, { "start.delay": delay });
    return getFlyById(id);
  } catch (error) {
    throw new Error("Impossible de modifier le vol : " + id);
  }
}

async function currentFly() {
  try {
    const flies = await FlyModel.find({
      "start.date": { $lte: new Date() },
      "finish.date": { $gte: new Date() },
    }).populate("finish.airport", "coordinate");

    flies.map(async (fly) => {
      const weather = await controllerWeather.getWeatherByCoord(
        fly.finish.airport.coordinate
      );
      const delay = await controllerWeather.setDelay(weather);
      if (delay > 0) {
        udpateDelayFinish(fly._id, delay);
      }
    });

    return flies;
  } catch (error) {
    throw new Error("Impossible de récupérer les vols en cours");
  }
}

async function comingFly() {
  try {
    const flies = await FlyModel.find({
      "start.date": { $gte: new Date() },
    }).populate("start.airport", "coordinate");

    flies.map(async (fly) => {
      const weather = await controllerWeather.getWeatherByCoord(
        fly.start.airport.coordinate
      );
      const delay = await controllerWeather.setDelay(weather);
      if (delay > 0) {
        udpateDelayStart(fly._id, delay);
      }
    });

    return flies;
  } catch (error) {
    throw new Error("Impossible de récupérer les vols à venir");
  }
}

module.exports = {
  getFlyById,
  createFly,
  updateFly,
  deleteFly,
  currentFly,
  comingFly,
};
