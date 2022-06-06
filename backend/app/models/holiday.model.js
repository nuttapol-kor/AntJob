var dayjs = require('dayjs')
const Holidays = [
  {
    start: new Date(2021,7,12,0,0,0),
    end: new Date(2021,7,12,0,0,0),
    title: "[วันหยุด] วันเฉลิมพระชนมพรรษา สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง และวันแม่แห่งชาติ",
    allDay: true,
    resource: {
      typeEvent: "holiday"
    }
  },
  {
    start: new Date(2021,8,24,0,0,0),
    end: new Date(2021,8,24,0,0,0),
    title: "[วันหยุด] วันมหิดล",
    allDay: true,
    resource: {
      typeEvent: "holiday"
    }
  },
  {
    start: new Date(2021,9,13,0,0,0),
    end: new Date(2021,9,13,0,0,0),
    title: "[วันหยุด] วันคล้ายวันสวรรคต พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร",
    allDay: true,
    resource: {
      typeEvent: "holiday"
    }
  },
  {
    start: new Date(2021,9,22,0,0,0),
    end: new Date(2021,9,22,0,0,0),
    title: "[วันหยุด] ชดเชยวันปิยมหาราช (เลื่อนจากวันจันทร์ที่ 25 ตุลาคม 2564 ตามมติ ครม. เมื่อวันที่ 29 ธ.ค. 2563)",
    allDay: true,
    resource: {
      typeEvent: "holiday"
    }
  },
];

module.exports = Holidays;
