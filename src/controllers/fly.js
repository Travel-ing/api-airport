const { FlyModel } = require("../model/fly");

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
    return await FlyModel.findOneAndDelete(id);
  } catch (error) {
    throw new Error("Impossible de supprimer le vol : " + id);
  }
}

async function currentFly() {
  try {
    return await FlyModel.find({
      "start.date": { $lte: new Date() },
      "finish.date": { $gte: new Date() },
    });
  } catch (error) {
    throw new Error("Impossible de récupérer les vols en cours");
  }
}

async function comingFly() {
  try {
    return await FlyModel.find({
      "start.date": { $gte: new Date() },
    });
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
