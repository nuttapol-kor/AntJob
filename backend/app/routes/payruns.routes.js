const { authJwt } = require("../middleware");
const payrunsController = require("./../controllers/payruns.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/payruns",
    [authJwt.verifyToken],
    payrunsController.allPayruns
  );

  app.get(
    "/api/payruns/:id",
    [authJwt.verifyToken],
    payrunsController.allPayruns
  );
};
