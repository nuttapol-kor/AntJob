const { authJwt } = require("../middleware");
const workerController = require("./../controllers/worker.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/workers/profile/:id",
    [authJwt.verifyToken],
    workerController.workerProfile
  );

  app.get(
    "/api/workers",
    [authJwt.verifyToken],
    workerController.allWorker
  );
};