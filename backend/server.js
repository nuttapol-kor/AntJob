const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: [
    "http://localhost:8081",
    "http://localhost:3000",
    "http://localhost:3001",
    "https://localhost:5001",
    "https://antjob.co",
    "http://antjob.co",
    "https://antjob.uc.r.appspot.com",
    "https://www.antjob.co",
    "http://www.antjob.co",
  ],
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/image", express.static("./app/image"));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/course.routes")(app);
require("./app/routes/department.routes")(app);
require("./app/routes/event.routes")(app);
require("./app/routes/worker.routes")(app);
require("./app/routes/paytypes.routes")(app);
require("./app/routes/payruns.routes")(app);
require("./app/routes/insurance.routes")(app);
require("./app/routes/shopCategory.routes")(app);
require("./app/routes/travelCategory.routes")(app);
require("./app/routes/mainCategory.routes")(app);
require("./app/routes/item.routes")(app);
require("./app/routes/package.routes")(app);
require("./app/routes/review.routes")(app);
require("./app/routes/travel.routes")(app);
require("./app/routes/history.routes")(app);
require("./app/routes/delivery.routes")(app);
require("./app/routes/facilities.routes")(app);
require("./app/routes/insuranceCategory.routes")(app);
require("./app/routes/icons.routes")(app);
require("./app/routes/health.routes")(app);
require("./app/routes/healthCheck.routes")(app);
require("./app/routes/healthCheckCategory.routes")(app);
require("./app/routes/rightTreatment.routes")(app);
require("./app/routes/treatmentCategory.routes")(app);
require("./app/routes/notification.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });

//   Role.create({
//     id: 2,
//     name: "moderator"
//   });

//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }
