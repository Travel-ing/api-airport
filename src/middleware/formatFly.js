const { PlaneModel } = require("../model/plane");
const dfns = require("date-fns");

async function formatFly(req, res, next) {
  if (req.method === "POST" || req.method === "PUT") {
    try {
      const plane = await PlaneModel.findById(req.body.plane);
      if (plane.maxPlace < req.body.passenger) {
        res
          .status(400)
          .end("Le nombre de place est supérieur à la capacité de l'avion");
      }
    } catch (error) {
      res.status(400).json(error);
    }
    try {
      if (
        dfns.differenceInSeconds(
          new Date(req.body.finish.date),
          new Date(req.body.start.date)
        ) <= 0
      ) {
        res
          .status(400)
          .end(
            "La date d'arrivée ne peut pas être inférieur à celle de départ"
          );
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }

  next();
}

module.exports = formatFly;
