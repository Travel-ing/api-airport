const { AirportModel } = require("../model/airport");

async function createAirport(body) {
  try {
    return await AirportModel.create(body);
  } catch (error) {
    throw new Error(error);
  }
}

async function getAirportById(id) {
  try {
    return await AirportModel.findById(id);
  } catch (error) {
    throw new Error(error);
  }
}

async function updateAirport(id, body) {
  try {
    await AirportModel.findByIdAndUpdate(id, body);
    return getAirportById(id);
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteAirport(id) {
  try {
    return await AirportModel.findOneAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createAirport,
  getAirportById,
  updateAirport,
  deleteAirport,
};
