const { authJwt } = require("../middleware");
const controller = require("./../controllers/insuranceCategory.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/insuranceCategory",
    [authJwt.verifyToken],
    controller.allInsuranceCategory
  );
};
