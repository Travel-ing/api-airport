var express = require("express");
var router = express.Router();
const controller = require("../controllers/plane");

router.get("/:id", async function (req, res) {
  try {
    res.status(200).json(await controller.getPlaneById(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async function (req, res) {
  try {
    res.status(200).json(await controller.getPlane());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async function (req, res) {
  try {
    res.status(200).json(await controller.createPlane(req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async function (req, res) {
  try {
    res.status(200).json(await controller.updatePlane(req.params.id, req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const result = await controller.deletePlane(req.params.id);
    if (result !== null) res.status(200).json(result);
    else res.status(404).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
