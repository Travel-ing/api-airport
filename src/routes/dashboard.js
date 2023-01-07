var express = require("express");
var router = express.Router();
const controller = require("../controllers/fly");

router.get("/current", async function (req, res) {
  try {
    res.status(200).json(await controller.currentFly());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/coming", async function (req, res) {
  try {
    res.status(200).json(await controller.comingFly());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
