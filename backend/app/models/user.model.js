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
    capital: "1,000,000",
    yearStart: "1900",
    registerStart: "",
    contact: {
      fullname: "Brittney Medina",
      email: "brittme@scg.com",
      phone: "089-999-9999",
    },
    manPowerSize: 0,
    incomeLastYear: 0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in viverra orci. Pellentesque sagittis id urna vitae eleifend. Proin ac est vestibulum, efficitur orci sit amet, consequat orci. Curabitur at semper tortor. Integer nunc lectus, fermentum ac elementum ut, ultrices quis lacus. Morbi nulla velit, ultrices vel nisl eget, luctus hendrerit eros. Sed a purus sed turpis tincidunt hendrerit. Nunc vitae dignissim tortor. Curabitur semper iaculis purus maximus cursus. Nulla nulla ex, ultricies vitae efficitur eget, auctor sit amet lorem. Cras in dui odio. In interdum magna turpis, et congue ante vulputate et. Proin volutpat sem ut nisi lobortis, vel rhoncus velit vulputate. Aliquam tortor tellus, gravida eget dictum in, pulvinar quis nisi. Curabitur bibendum placerat nulla eget ornare.",
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
    expertise: ["Software Engineering", "งานแม่บ้าน", "DevOps & IT", "Marketing", "Design"],
    chargeEarnings: 0,
    chargeOt: 0,
    remark: "",
  },
];
module.exports = Users;
