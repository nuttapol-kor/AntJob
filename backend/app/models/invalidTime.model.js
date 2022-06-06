var dayjs = require('dayjs')
const InvalidTime = [
  {
    start: new Date(2021,7,8,7,30,0),
    end: new Date(2021,7,8,0,0,0),
    allDay: true,
    title: "เวลาทำงานไม่สมบูรณ์",
    resource: {
      typeEvent: "invalidTime"
    }
  },
  {
    start: new Date(2021,8,6,7,30,0),
    end: new Date(2021,8,6,0,0,0),
    title: "เวลาทำงานไม่สมบูรณ์",
    allDay: true,
    resource: {
      typeEvent: "invalidTime"
    }
  },
  {
    start: new Date(2021,8,10,0,0,0),
    end: new Date(2021,8,10,16,30,0),
    title: "เวลาทำงานไม่สมบูรณ์",
    allDay: true,
    resource: {
      typeEvent: "invalidTime"
    }
  },
  {
    start: dayjs(new Date(2021,8,2,0,0,0)),
    end: dayjs(new Date(2021,8,2,16,30,0)),
    title: "เวลาทำงานไม่สมบูรณ์",
    allDay: true,
    resource: {
      typeEvent: "invalidTime"
    }
  },
];

module.exports = InvalidTime;
