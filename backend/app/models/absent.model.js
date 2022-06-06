var dayjs = require('dayjs')
const Absent = [
  {
    start: new Date(2021,8,20,0,0,0),
    end: new Date(2021,8,20,0,0,0),
    allDay: true,
    title: "ขาดงาน",
    resource: {
      typeEvent: "absent"
    }
  },
  {
    start: new Date(2021,8,16,0,0,0),
    end: new Date(2021,8,16,0,0,0),
    title: "ขาดงาน",
    allDay: true,
    resource: {
      typeEvent: "absent"
    }
  },
];

module.exports = Absent;
