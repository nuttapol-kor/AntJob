const { authJwt } = require("../middleware");
const paytypesController = require("./../controllers/paytypes.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/paytypes",
    [authJwt.verifyToken],
    paytypesController.allPaytypes
  );

  app.get(
    "/api/paytypes/additions",
    [authJwt.verifyToken],
    paytypesController.allAdditions
  );
};
