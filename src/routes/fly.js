var express = require("express");
var router = express.Router();
const controller = require("../controllers/fly");

router.get("/:id", async function (req, res) {
  try {
    res.status(200).json(await controller.getFlyById(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.status(200).json(await controller.createFly(req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async function (req, res) {
  try {
    res.status(200).json(await controller.updateFly(req.params.id, req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async function (req, res) {
  try {
    res.status(200).json(await controller.deleteFly(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/current/fly", async function (req, res) {
  try {
    res.status(200).json(await controller.currentFly());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/coming/fly", async function (req, res) {
  try {
    res.status(200).json(await controller.comingFl());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
