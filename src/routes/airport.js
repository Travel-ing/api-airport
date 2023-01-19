var express = require("express");
var router = express.Router();
const controller = require("../controllers/airport");

router.get("/", async function (req, res) {
  try {
    res.status(200).json(await controller.getAirport());
  } catch (error) {
    res.status(400).end(error.message)
  }
});

router.get("/:id", async function (req, res) {
  try {
    res.status(200).json(await controller.getAirportById(req.params.id));
  } catch (error) {
    res.status(400).end(error.message)
  }
});

router.post("/", async function (req, res) {
  try {
    res.status(200).json(await controller.createAirport(req.body));
  } catch (error) {
    res.status(400).end(error.message)
  }
});

router.put("/:id", async function (req, res) {
  try {
    res
      .status(200)
      .json(await controller.updateAirport(req.params.id, req.body));
  } catch (error) {
    res.status(400).end(error.message)
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const result = await controller.deleteAirport(req.params.id);
    if (result !== null) res.status(200).json(result);
    else res.status(404).json();
  } catch (error) {
    res.status(400).end(error.message)
  }
});

module.exports = router;
