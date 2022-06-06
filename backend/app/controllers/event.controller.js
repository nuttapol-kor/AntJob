const db = require("../models");
var dayjs = require('dayjs');

const Holidays = db.holidays;
const Ot = db.ot;
const InvalidTime = db.invalidTime;
const Absent = db.absent;
const Late = db.late;
const Leave = db.leave;
const Timeline = db.timeline;

exports.allTimeline = (req, res) => {
  try {
    res.status(200).send(Timeline);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.allEvents = (req, res) => {
  try {
    res.status(200).send(Holidays);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.eventsByMonth = (req, res) => {
  try {
    let resultHolidays = Holidays.filter((holiday) => holiday.start.getMonth() == req.params.month);
    let resultOt = Ot.filter((ot) => ot.start.getMonth() == req.params.month);
    let resultInvalidTime = InvalidTime.filter((invalidTime) => dayjs(invalidTime.start).get('month') == req.params.month);
    let resultAbsent = Absent.filter((absent) => absent.start.getMonth() == req.params.month);
    let resultLate = Late.filter((late) => late.start.getMonth() == req.params.month);
    let resultLeave = Leave.filter((leave) => leave.start.getMonth() == req.params.month);
    
    let events = [...resultHolidays, ...resultOt, ...resultInvalidTime, ...resultAbsent, ...resultLate, ...resultLeave]
    if (events) {
      res.status(200).send(events.sort((a, b) => a.start - b.start));
    } else {
      return res.status(404).send({ message: "Holiday Not found." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.eventsLeaveByMonth = (req, res) => {
  try {
    
    let events = [...Holidays, ...Leave];
    if (events) {
      res.status(200).send(events);
    } else {
      return res.status(404).send({ message: "Holiday Not found." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
