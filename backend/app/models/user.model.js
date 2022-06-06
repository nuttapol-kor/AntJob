const Users = [
  {
    id: 1,
    email: "company@mail.com",
    username: "scgofficial",
    password: "company1234",
    amdin: [],
    companyName: "บริษัท ปูนซิเมนต์ไทย จำกัด (มหาชน)",
    yearStart: "",
    registerStart: "",
    manPowerSize: 0,
    incomeLastYear: 0,
    description: "",
    headOffice: "",
    branchOffice: [],
    contact: {
      fullname: "Brittney Medina",
      email: "brittme@scg.com",
      phone: "089-999-9999",
    },
  },
  {
    id: 2,
    email: "vendor@mail.com",
    password: "vendor1234",
    mainContact: {},
    amdin: [],
    companyName: "Manpower Vender Company",
    capital: "",
    yearStart: "",
    registerStart: "",
    contact: {
      fullname: "Brittney Medina",
      email: "brittme@scg.com",
      phone: "089-999-9999",
    },
    manPowerSize: 0,
    incomeLastYear: 0,
    description: "",
    headOffice: {
      address:
        "เลขที่ 74/1 หมู่ 1 ถ.ราชพฤกษ์ ต.ท่าอิฐ อ.ปากเกร็ด จ.นนทบุรี 11120",
      phone: "02-547-0099",
      email: "hq@mail.com",
    },
    branchOffice: [
      {
        name: "สาขาแสมดำ",
        address:
          "เลขที่ 160 ถนนพระรามที่2 แขวงแสมดำ เขตบางขุนเทียน กรุงเทพมหานคร 10150",
        phone: "061-384-7307",
        email: "bkk@mail.com",
      },
      {
        name: "สาขาศรีภูมิ เชียงใหม่",
        address:
          "เลขที่ 29 ถนนหัสดิเสวี ตำบลศรีภูมิ อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ 50200",
        phone: "061-265-3104",
        email: "cnx@mail.com",
      },
      {
        name: "สาขาเมืองขอนแก่น",
        address:
          "เลขที่ 250/1 ถนนศรีจันทร์ ตำบลในเมือง อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40000",
        phone: " 084-685-5456,084-685-5486",
        email: "kkc@mail.com",
      },
      {
        name: "สาขาหาดใหญ่",
        address:
          "77 ถนนโชติวิทยะกุล 4 ตำบลหาดใหญ่ อำเภอหาดใหญ่ จังหวัดสงขลา 90110",
        phone: "081-916-0555,085-077-5335",
        email: "sgz@mail.com",
      },
    ],
    expertise: [],
    chargeEarnings: 0,
    chargeOt: 0,
    remark: "",
  },
];
module.exports = Users;
