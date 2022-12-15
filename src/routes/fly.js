var express = require("express");
var router = express.Router();

router.get("/:id", function (req, res, next) {
  console.log("Get Fly by id");
  res.end()
});

router.post("/", function (req, res, next) {
  console.log("Create Fly");
  res.end();
});

router.put("/:id", function (req, res, next) {
  console.log("Update Fly");
  res.end();
});

router.delete("/:id", function (req, res, next) {
  console.log("Delete Fly");
  res.end();
});

router.get("/current", function (req, res, next) {
  console.log("Get Current fly");
  res.end();
});

router.get("/coming", function (req, res, next) {
  console.log("Get future Fly");
  res.end();
});

module.exports = router