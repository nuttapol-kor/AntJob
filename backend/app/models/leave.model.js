var dayjs = require('dayjs')
const Leave = [
  {
    start: new Date(2021,8,8,0,0,0),
    end: new Date(2021,8,9,16,30,0),
    allDay: true,
    title: "ลาพักร้อน",
    resource: {
      typeEvent: "leave"
    }
  },
  {
    start: new Date(2021,8,21,7,30,0),
    end: new Date(2021,8,21,12,30,0),
    title: "ลากิจ",
    allDay: false,
    resource: {
      typeEvent: "leave"
    }
  },
];

module.exports = Leave;
