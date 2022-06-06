
// import Factory from "../-_Temporary Job.png";
// import Driver from "../-_Security Management.png";
// import Clean from "../-_Cleaning Management.png";

import ScgLogo from "../logo company/SCG.png"
import PttLogo from "../logo company/ptt.png"
import Thaioil from "../logo company/thaioil.png"
import Coke from "../logo company/coca-cola.png"
import Cp from "../logo company/cp.png"
import Wongnai from "../logo company/wongnai.jpg"

const request = [
    {
        name : "ผู้ช่วยผลิต", 
        department: "Production",
        company: "บริษัท ปตท. จำกัด (มหาชน)",
        icon: PttLogo,
        size: 100,
        typeEmp: "Part Time",
        exp: 9,
        urgent: true,
        register: 0,
        province: "Rayong",
        city: "Map Ta Phut",
        address: "",
        salary: 350,
        salaryType: "รายวัน",
        link: "/ptt/bidding/bidding-1",
        description: "We are looking for a Full Stack developer to reinforce our team. You will participate in all phases of development from specification to production. Your missions will be the following: Take charge of the design, deployment and quality monitoring of our platform's modules Carry out the integration of components into the platform's applications Interacting on a daily basis with the members of your team You will be responsible for the development of the platform and its components."
    },
    {
        name : "พนักงานขับรถส่งของ", 
        department: "Logistic",
        company: "บริษัท ปูนซิเมนต์ไทย จำกัด (มหาชน)",
        icon: ScgLogo,
        size: 350,
        typeEmp: "Permanent",
        exp: 9,
        urgent: false,
        register: 3,
        province: "Bangkok",
        city: "Bang Sue",
        address: "",
        salary: 15000,
        salaryType: "รายเดือน",
        link: "/scg/bidding/bidding-2",
        description : "Fusce nec ultrices nibh, id aliquet odio. Donec pulvinar efficitur velit sit amet ultricies. Suspendisse et tempor ipsum. Suspendisse potenti. Donec ac porta turpis. Donec eu eleifend neque. Integer id nisi lobortis, condimentum ante nec, facilisis orci. Suspendisse sed justo aliquam, eleifend metus eu, pulvinar ex. Maecenas nec laoreet massa, ac pharetra dui"
    },
    {
        name : "พนักงานขับรถส่งของ", 
        department: "Logistic",
        company: "บริษัท โคคา-โคล่า (ประเทศไทย) จำกัด",
        icon: Coke,
        size: 200,
        typeEmp: "Part Time",
        exp: 9,
        urgent: false,
        register: 9,
        province: "Chonburi",
        city: "Phanat Nikhom",
        address: "",
        salary: 12000,
        salaryType: "รายเดือน",
        link: "/coke/bidding/bidding-3",
        description: "Donec vitae massa pretium, elementum metus id, finibus dolor. Fusce in rhoncus justo, vel dictum mauris. Suspendisse eu vestibulum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sed mauris vel diam ornare fringilla non eu metus."
    },
    {
        name : "พนักงานตรวจสอบสินค้า", 
        department: "QA&QC",
        company: "บริษัท วงใน มีเดีย จำกัด",
        icon: Wongnai,
        size: 5,
        typeEmp: "Part Time",
        exp: 9,
        urgent: false,
        register: 9,
        province: "Chonburi",
        city: "Phanat Nikhom",
        address: "",
        salary: 12000,
        salaryType: "รายเดือน",
        link: "/wongnai/request/job-1",
        description: "Donec vitae massa pretium, elementum metus id, finibus dolor. Fusce in rhoncus justo, vel dictum mauris. Suspendisse eu vestibulum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sed mauris vel diam ornare fringilla non eu metus."
    },
    {
        name : "เจ้าหน้าที่ธุรการ", 
        department: "Logistic",
        company: "บริษัท ไทยออยล์ จำกัด (มหาชน)",
        icon: Thaioil,
        size: 2,
        typeEmp: "Part Time",
        exp: 9,
        urgent: false,
        register: 9,
        province: "Chonburi",
        city: "Phanat Nikhom",
        address: "",
        salary: 12000,
        salaryType: "รายเดือน",
        link: "/thaioil/request/job-2",
        description: "Donec vitae massa pretium, elementum metus id, finibus dolor. Fusce in rhoncus justo, vel dictum mauris. Suspendisse eu vestibulum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sed mauris vel diam ornare fringilla non eu metus."
    },
    {
        name : "เจ้าหน้าที่บรรจุภัณฑ์", 
        department: "",
        company: "บริษัท ซีพี ออลล์ จํากัด (มหาชน)",
        icon: Cp,
        size: 1,
        typeEmp: "Part Time",
        exp: 9,
        urgent: true,
        register: 9,
        province: "Chonburi",
        city: "Phanat Nikhom",
        address: "",
        salary: 12000,
        salaryType: "รายเดือน",
        link: "/cp/request/job-3",
        description: "Donec vitae massa pretium, elementum metus id, finibus dolor. Fusce in rhoncus justo, vel dictum mauris. Suspendisse eu vestibulum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sed mauris vel diam ornare fringilla non eu metus."
    }
];

export default request