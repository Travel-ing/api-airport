const { AirportModel } = require("../model/airport");

async function createAirport(body) {
  try {
    return await AirportModel.create(body);
  } catch (error) {
    throw new Error("Impossible de créer l'aéroport");
  }
}

async function getAirportById(id) {
  try {
    return await AirportModel.findById(id);
  } catch (error) {
    throw new Error("Impossible de récupérer l'aéroport : " + id);
  }
}

async function getAirport() {
  try {
    return await AirportModel.find();
  } catch (error) {
    throw new Error("Impossible de récupérer la liste d'aéroports");
  }
}

async function updateAirport(id, body) {
  try {
    await AirportModel.findByIdAndUpdate(id, body);
    return getAirportById(id);
  } catch (error) {
    throw new Error("Impossible de modifier l'aéroport : " + id);
  }
}

async function deleteAirport(id) {
  try {
    return await AirportModel.findOneAndDelete({ _id: id });
  } catch (error) {
    throw new Error("Impossible de supprimer l'aéroport : " + id);
  }
}

module.exports = {
  createAirport,
  getAirport,
  getAirportById,
  updateAirport,
  deleteAirport,
};
