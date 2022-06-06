const db = {};

db.users = require("./user.model.js");
db.courses = require("./course.model.js");
db.departments = require("./department.model.js")
db.holidays = require("./holiday.model.js");
db.ot = require("./ot.model.js");
db.invalidTime = require("./invalidTime.model.js");
db.absent = require("./absent.model.js");
db.late = require("./late.model.js");
db.leave = require("./leave.model.js");
db.timeline = require("./timeline.model.js");
db.payruns = require("./payrun.model.js");
db.Insurance = require("./insurance.model.js");
db.item = require("./item.model.js");
db.shopCategory = require("./shopCategory.model.js");
db.mainCategory = require("./mainCategory.model.js");
db.travelCategory = require("./travelCategory.model.js");
db.package = require("./package.model.js");
db.review = require("./review.model.js");
db.travel = require("./travel.model.js");
db.history = require("./history.model.js");
db.delivery = require("./delivery.model.js");
db.facilities = require("./facilities.model.js");
db.insuranceCategory = require("./InsuranceCategory.model.js");
db.Icons = require("./icons.model.js");
db.health = require("./health.model.js");
db.healthCheck = require("./healthCheck.model.js");
db.healthCheckCategory = require("./healthCheckCategory.model.js");
db.rightTreatment = require("./rightTreatment.model.js");
db.treatmentCategory = require("./treatmentCategory.model.js");
db.notification = require("./notification.model.js");

module.exports = db;