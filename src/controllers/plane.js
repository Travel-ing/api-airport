const { PlaneModel } = require("../model/plane");

async function createPlane(body) {
  try {
    return await PlaneModel.create(body);
  } catch (error) {
    throw new Error(error);
  }
}

async function getPlaneById(id) {
  try {
    return await PlaneModel.findById(id);
  } catch (error) {
    throw new Error(error);
  }
}

async function updatePlane(id, body) {
  try {
    return await PlaneModel.findByIdAndUpdate(id, body)
  } catch (error) {
    throw new Error(error);
  }
}

async function deletePlane(id) {
  try {
    return await PlaneModel.findOneAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createPlane,
  getPlaneById,
  updatePlane,
  deletePlane,
};
