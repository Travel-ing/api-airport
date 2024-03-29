const { PlaneModel } = require("../model/plane");

async function createPlane(body) {
  try {
    return await PlaneModel.create(body);
  } catch (error) {
    throw new Error("Impossible de créer l'avion");
  }
}

async function getPlaneById(id) {
  try {
    return await PlaneModel.findById(id);
  } catch (error) {
    throw new Error("Impossible de récupérer l'avion : " + id);
  }
}

async function getPlane() {
  try {
    return await PlaneModel.find();
  } catch (error) {
    throw new Error("Impossible de récupérer la liste d'avion ");
  }
}

async function updatePlane(id, body) {
  try {
    await PlaneModel.findByIdAndUpdate(id, body);
    return getPlaneById(id);
  } catch (error) {
    throw new Error("Impossible de modifer l'avion : " + id);
  }
}

async function deletePlane(id) {
  try {
    return await PlaneModel.findOneAndDelete({ _id: id });
  } catch (error) {
    throw new Error("Impossible de supprimer l'avion : " + id);
  }
}

module.exports = {
  createPlane,
  getPlane,
  getPlaneById,
  updatePlane,
  deletePlane,
};
