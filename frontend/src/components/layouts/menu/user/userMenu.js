import React from "react";
import ListMenu from "../../../pages/shared/listMenu";

import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";

const UserMenu = () => {

  const dataListMenu = [
    {
      listItemIcon: <HomeIcon />,
      listItemText: "Home",
      listLink: "/home",
      listKey:"home",
    },
    // {
    //   listItemIcon: <DashboardIcon />,
    //   listItemText: "รายงานของฉัน",
    //   listLink: "",
    //   listKey:"report",
    //   collapse: [
    //     {
    //       listItemIcon: <Filter1Icon />,
    //       listItemText: "เวลาไม่สมบูรณ์",
    //       listLink: "/report/incomplete",
    //       listKey:"incomplete",
    //     },
    //     {
    //       listItemIcon: <Filter2Icon />,
    //       listItemText: "ตารางเวลา",
    //       listLink: "/report/timeline",
    //       listKey:"timeline",
    //     },
    //   ],
    // },
    {
      listItemIcon: <DashboardIcon />,
      listItemText: "ตารางเวลาทำงาน",
      listLink: "/timeline",
      listKey:"timeline",
    },
    {
      listItemIcon: <DashboardIcon />,
      listItemText: "ลางาน",
      listLink: "/leave",
      listKey:"leave",
    },
    {
      listItemIcon: <PersonIcon />,
      listItemText: "สถานะรายการ",
      listLink: "/requestlist",
      listKey:"requestlist",
    },
    {
      listItemIcon: <PersonIcon />,
      listItemText: "รายงานค่าล่วงเวลา",
      listLink: "/overtime/overtimereport",
      listKey:"overtimereport",
    },
    {
      listItemIcon: <ConnectWithoutContactIcon />,
      listItemText: "Flexible Benefit",
      listLink: "",
      listKey:"flexiblebenefit",
      collapse: [
        {
          listItemIcon: <Filter1Icon />,
          listItemText: "Package",
          listLink: "/flexben/package",
          listKey:"flexbenpackage",
        },
        {
          listItemIcon: <Filter1Icon />,
          listItemText: "Insurance",
          listLink: "/flexben/insurance",
          listKey:"flexbeninsurance",
        },
        {
          listItemIcon: <Filter1Icon />,
          listItemText: "Shopping",
          listLink: "/flexben/shopping",
          listKey:"flexbenshopping",
        },
        {
          listItemIcon: <Filter1Icon />,
          listItemText: "Travel",
          listLink: "/flexben/travel",
          listKey:"flexbentravel",
        },
      ],
    },
    {
      listItemIcon: <ConnectWithoutContactIcon />,
      listItemText: "Health",
      listLink: "",
      listKey:"health",
      collapse: [
        {
          listItemIcon: <Filter1Icon />,
          listItemText: "Dashboard",
          listLink: "/health/dashboard",
          listKey:"healthdashboard",
        },
        {
          listItemIcon: <Filter1Icon />,
          listItemText: "Treatment History",
          listLink: "/health/treatment-history",
          listKey:"treatmenthistory",
        },
        {
          listItemIcon: <Filter1Icon />,
          listItemText: "Health History",
          listLink: "/health/history",
          listKey:"healthhistory",
        },
        
      ],
    },
    // {
    //   listItemIcon: <PersonIcon />,
    //   listItemText: "Profile",
    //   listLink: "/profile",
    //   listKey:"profile",
    // },
  ];

  return (
    <ListMenu key="user" dataListMenu={dataListMenu} />
  );
};

export default UserMenu;
