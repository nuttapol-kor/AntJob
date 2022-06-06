const { authJwt } = require("../middleware");
const eventController = require("./../controllers/event.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/timeline",
    [authJwt.verifyToken],
    eventController.allTimeline
  );

  app.get(
    "/api/events",
    [authJwt.verifyToken],
    eventController.allEvents
  );
  
  app.get(
    "/api/events/leave",
    [authJwt.verifyToken],
    eventController.eventsLeaveByMonth
  );

  app.get(
    "/api/events/:month",
    [authJwt.verifyToken],
    eventController.eventsByMonth
  );

  
};
