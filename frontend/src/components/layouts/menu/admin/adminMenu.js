import React from "react";
import ListMenu from "../../../pages/shared/listMenu";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import SettingsIcon from "@mui/icons-material/Settings";
import BoltIcon from "@mui/icons-material/Bolt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import GroupIcon from "@mui/icons-material/Group";
import CoPresentIcon from '@mui/icons-material/CoPresent';

const AdminMenu = () => {
  const dataListMenu = [
    {
      listItemIcon: <BubbleChartIcon />,
      listItemText: "มุมมองภาพรวม",
      listLink: "/admin/overview",
      listKey: "overview",
    },
    {
      listItemIcon: <i class="fad fa-sitemap"></i>,
      listItemText: "Organization",
      listLink: "",
      listKey: "organization",
      collapse: [
        {
          listItemIcon: <i class="far fa-sitemap"></i>,
          listItemText: "Organization",
          listLink: "/admin/organization",
          listKey: "generalorganization",
        },
        {
          listItemIcon: <i class="fal fa-project-diagram"></i>,
          listItemText: "Organization Project",
          listLink: "/admin/project-list",
          listKey: "projectorganization",
        },
        // {
        //   listItemIcon: <i class="fal fa-project-diagram"></i>,
        //   listItemText: "Organization Project",
        //   listLink: "/admin/organization-project",
        //   listKey: "projectorganization",
        // },
      ],
    },
    {
      listItemIcon: <BoltIcon />,
      listItemText: "Manpower",
      listLink: "/admin/manpower",
      listKey: "manpower",
    },
    {
      listItemIcon: <CoPresentIcon />,
      listItemText: "Vendor Suggestion",
      listLink: "/admin/vendor-suggestion",
      listKey: "vendorsuggestion",
    },
    {
      listItemIcon: <PersonAddIcon />,
      listItemText: "Request",
      listLink: "/admin/request",
      listKey: "request",
    },
    {
      listItemIcon: <FolderSharedIcon />,
      listItemText: "Core Data",
      listLink: "",
      listKey: "coredata",
      collapse: [
        {
          listItemIcon: <GroupIcon />,
          listItemText: "Employees List",
          listLink: "/admin/employees",
          listKey: "employeeslist",
        },
      ],
    },
    {
      listItemIcon: <DashboardIcon />,
      listItemText: "Dashboard",
      listLink: "",
      listKey: "dashboard",
      collapse: [
        {
          listItemIcon: <Filter1Icon />,
          listItemText: "ข้อมูลค่าล่วงเวลา",
          listLink: "/admin/dashboard/ot",
          listKey: "overtime",
        },
        {
          listItemIcon: <Filter2Icon />,
          listItemText: "ภาพรวมเวลาทำงาน",
          listLink: "/admin/dashboard/workingtime",
          listKey: "workingtime",
        },
        {
          listItemIcon: <Filter2Icon />,
          listItemText: "ภาพรวมค่าใช้จ่าย",
          listLink: "/admin/dashboard/cost",
          listKey: "cost",
        },
      ],
    },
    {
      listItemIcon: <TrendingUpIcon />,
      listItemText: "OT Monitoring",
      listLink: "/admin/otmonitoring",
      listKey: "otmonitoring",
    },
    {
      listItemIcon: <AttachMoneyIcon />,
      listItemText: "Payroll",
      listLink: "",
      listKey: "payroll",
      collapse: [
        {
          listItemIcon: <Filter1Icon />,
          listItemText: "จัดการเงินเดือน",
          listLink: "/admin/payroll/run",
          listKey: "payrollrun",
        },
        {
          listItemIcon: <Filter2Icon />,
          listItemText: "Payslip",
          listLink: "/admin/payroll/pay-slip",
          listKey: "payslip",
        },
      ],
    },
    {
      listItemIcon: <BrightnessMediumIcon />,
      listItemText: "การจัดการกะ",
      listLink: "/admin/shift",
      listKey: "shift",
    },
    {
      listItemIcon: <SettingsIcon />,
      listItemText: "เมนูผู้ดูแลระบบ",
      listLink: "/admin/setting",
      listKey: "setting",
    },
  ];

  return <ListMenu dataListMenu={dataListMenu} menuRole={"Admin"} />;
};

export default AdminMenu;
