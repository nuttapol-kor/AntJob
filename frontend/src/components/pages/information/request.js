import React, { useEffect, useState, Fragment } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "@mui/material/Link";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import FactoryIcon from "@mui/icons-material/Factory";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";

// import DialogAddAppointment from "./dialogAddAppointment";
// import DialogDeleteCandidate from "./dialogDeleteCandidate";

import CardStyle from "../shared/general/Card";
import ButtonBlue from "../shared/general/ButtonBlue";

import request from "../assets/data/request";

import Utils from "../../../utils";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingBottom: 36,
  // ["@media (min-width:1200px)"]:{
  //   paddingLeft: 24,
  //   paddingRight: 24
  // }
});

const StyledChip = styled(Chip)({
  color: "#b72136",
  backgroundColor: "#ff484229",
  fontWeight: 700,
  borderRadius: 6,
});

const StyledPaperCandidate = styled(Paper)({
  marginBottom: 16,
  padding: 16,
  borderRadius: 20,
  "& .check": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    "& .Mui-checked": {
      color: "#ff4842",
    },
  },
  "& .review": {
    display: "flex",
    alignItems: "center",
  },
});

const StyledAvatarCandidate = styled(Avatar)({
  width: 64,
  height: 64,
  marginBottom: 16,
});

const StyledContent = styled("div")({
  padding: 36,
  paddingTop: 24,
  "& .part-one": {
    display: "flex",
    alignItems: "flex-start",
    marginTop: 8,
    ["@media only screen and (max-width: 600px)"]:{
      flexDirection: "column"
    },
    "& .detail": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      "& .start": {
        "& .position": {
          marginBottom: 12,
        },
        "& div": {
          marginRight: 32,
          ["@media only screen and (max-width: 600px)"]:{
            marginRight: 0
          },
        },
      },
      "& .end": {
        textAlign: "end",
      },
      ["@media only screen and (max-width: 600px)"]:{
        flexDirection: "column",
        marginTop: 16
      },
    },
    "& .MuiAvatar-root": {
      width: 120,
      height: 120,
      fontSize: 42,
      marginRight: 36,
      borderRadius: 12
    },
    "& .MuiTypography-caption": {
      fontSize: 14,
    },
  },
  "& .part-two": {
    display: "flex",
    justifyContent: "end",
  },
  "& .wrap-item": {
    "& .label": {
      fontWeight: 400,
      fontSize: 16,
      marginBottom: 4,
      "& span": {
        marginLeft: 16,
      },
    },
    "& .value": {
      fontSize: 18,
      marginLeft: 32,
    },
    "& .fal": {
      marginRight: 8,
    },
  },
  "&.selected-candidate": {
    minHeight: 200,
    "& .part-one": {
      marginBottom: 16,
    },
    "& .wrap-selected-candidate-list": {
      display: "grid",
      columnGap: 16,
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    "& .candidate-id": {
      "& .MuiTypography-h6": {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    "& .date-appointment": {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
    },
  },
  "&.candidate": {
    minHeight: 200,
    "& .part-one": {
      marginBottom: 16,
      display: "flex",
      justifyContent: "space-between",
    },
    "& .wrap-candidate-list": {
      display: "grid",
      columnGap: 16,
      gridTemplateColumns: "repeat(4, 1fr)",
      "& .candidate-id": {
        "& .MuiTypography-h6": {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }
  
  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }
  
  function union(a, b) {
    return [...a, ...not(b, a)];
  }

const RequestInformationPage = (props) => {
  const [search, setSearch] = React.useState("");
  const [idRequest, setIdRequest] = React.useState(0);
  const [openAddAppointment, setOpenAddAppointment] = React.useState(false);
  const [openDeleteCandidate, setOpenDeleteCandidate] = React.useState(false);
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([
    {
      id: 1,
      username: "admin",
      email: "admin@scg.com",
      password: "adminadmin",
      image: "1.jpg",
      firstname: "Tapmid",
      lastname: "Humphries",
      idDepartment: 13,
      department: "HR Business Partner",
      position: "Assistant Manager-HR Business Partner",
      mobileNumber: "065-556-3915",
      workingLocation: "Rayong Site#1",
      site: 1,
      status: "worked",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 29078,
      following: 84392,
      authorities: ["ROLE_ADMIN"],
    },
    {
      id: 2,
      username: "manager",
      email: "manager@scg.com",
      password: "managermanager",
      image: "2.jpg",
      firstname: "Theodor",
      lastname: "O'Moore",
      idDepartment: 13,
      department: "",
      position: "",
      mobileNumber: "085-550-0949",
      workingLocation: "",
      site: 1,
      status: "active",
      company: "",
      follower: 86753,
      following: 32454,
      authorities: ["ROLE_MANAGER"],
    },
    {
      id: 3,
      username: "user",
      email: "user@scg.com",
      password: "useruser",
      image: "3.jpg",
      firstname: "Shaunna",
      lastname: "Richard",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-558-9673",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "candidate",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 4,
      username: "superuser",
      email: "mandeemc@domain.com",
      password: "superuser",
      image: "4.jpg",
      firstname: "Mandeep",
      lastname: "Mccray",
      idDepartment: 5,
      department: "Catalyst & Pilot Plant Production Department",
      position: "Catalyst Production Operator",
      mobileNumber: "095-557-3152",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "worked",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER", "ROLE_MANAGER", "ROLE_ADMIN"],
    },
    {
      id: 5,
      username: "vendor",
      email: "vendor@domain.com",
      password: "vendorvendor",
      image: "5.jpg",
      firstname: "Alayna",
      lastname: "Wolfe",
      idDepartment: 2,
      department: "",
      position: "",
      mobileNumber: "085-558-4021",
      workingLocation: "",
      site: 3,
      status: "active",
      company: "",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_VENDOR"],
    },
    {
      id: 6,
      username: "anishava",
      email: "anishava@domain.com",
      password: "useruser",
      image: "6.jpg",
      firstname: "Anisha",
      lastname: "Valdez",
      idDepartment: 12,
      department: "",
      position: "",
      mobileNumber: "085-555-6279",
      workingLocation: "",
      site: 3,
      status: "active",
      company: "",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 7,
      username: "aedankn",
      email: "aedankn@domain.com",
      password: "useruser",
      image: "7.jpg",
      firstname: "Aedan",
      lastname: "Knights",
      idDepartment: 6,
      department: "",
      position: "",
      mobileNumber: "095-554-4538",
      workingLocation: "",
      site: 3,
      status: "terminate",
      company: "",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 8,
      username: "kaitlabr",
      email: "kaitlabr@domain.com",
      password: "useruser",
      image: "8.jpg",
      firstname: "Kaitlan",
      lastname: "Braun",
      idDepartment: 6,
      department: "",
      position: "",
      mobileNumber: "085-559-9269",
      workingLocation: "",
      site: 3,
      status: "active",
      company: "",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 9,
      username: "krystich",
      email: "krystich@domain.com",
      password: "useruser",
      image: "9.jpg",
      firstname: "Krystian",
      lastname: "Chase",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-557-9798",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "worked",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 10,
      username: "wilburro",
      email: "wilburro@domain.com",
      password: "useruser",
      image: "10.jpg",
      firstname: "Wilbur",
      lastname: "Roberts",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "065-557-2907",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "candidate",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 11,
      username: "maciema",
      email: "maciema@domain.com",
      password: "useruser",
      image: "11.jpg",
      firstname: "Macie",
      lastname: "Marshall",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "095-554-0195",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 12,
      username: "amiecr",
      email: "amiecr@domain.com",
      password: "useruser",
      image: "12.jpg",
      firstname: "Amie",
      lastname: "Croft",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-556-3474",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 13,
      username: "keeganba",
      email: "keeganba@domain.com",
      password: "useruser",
      image: "13.jpg",
      firstname: "Keegan",
      lastname: "Bates",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-555-0867",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 14,
      username: "roisinmi",
      email: "roisinmi@domain.com",
      password: "useruser",
      image: "14.jpg",
      firstname: "Roisin",
      lastname: "Millington",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "065-555-7752",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 15,
      username: "elenibi",
      email: "elenibi@domain.com",
      password: "useruser",
      image: "15.jpg",
      firstname: "Eleni",
      lastname: "Bishop",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "065-552-2903",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 16,
      username: "rajfr",
      email: "rajfr@domain.com",
      password: "useruser",
      image: "16.jpg",
      firstname: "Raj",
      lastname: "Fraser",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-557-5467",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 17,
      username: "dottybo",
      email: "dottybo@domain.com",
      password: "useruser",
      image: "17.jpg",
      firstname: "Dotty",
      lastname: "Bowers",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-553-1111",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 18,
      username: "saeedal",
      email: "saeedal@domain.com",
      password: "useruser",
      image: "18.jpg",
      firstname: "Saeed",
      lastname: "Alvarado",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "095-555-7759",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 19,
      username: "gurleele",
      email: "gurleele@domain.com",
      password: "useruser",
      image: "19.jpg",
      firstname: "Gurleen",
      lastname: "Leon",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-556-3139",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 20,
      username: "adrianca",
      email: "adrianca@domain.com",
      password: "useruser",
      image: "20.jpg",
      firstname: "Adrianna",
      lastname: "Campos",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "065-552-3709",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 21,
      username: "enyapi",
      email: "enyapi@domain.com",
      password: "useruser",
      image: "21.jpg",
      firstname: "Enya",
      lastname: "Pittman",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-558-6568",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 22,
      username: "keithva",
      email: "keithva@domain.com",
      password: "useruser",
      image: "22.jpg",
      firstname: "Keith",
      lastname: "Vazquez",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-551-9891",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 23,
      username: "arjunco",
      email: "arjunco@domain.com",
      password: "useruser",
      image: "23.jpg",
      firstname: "Arjun",
      lastname: "Connolly",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-559-8630",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 24,
      username: "michalki",
      email: "michalki@domain.com",
      password: "useruser",
      image: "24.jpg",
      firstname: "Michalina",
      lastname: "King",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "095-550-3437",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 25,
      username: "mathilbo",
      email: "mathilbo@domain.com",
      password: "useruser",
      image: "25.jpg",
      firstname: "Mathilda",
      lastname: "Bonilla",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "095-551-9585",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 26,
      username: "kerysrh",
      email: "kerysrh@domain.com",
      password: "useruser",
      image: "26.jpg",
      firstname: "Kerys",
      lastname: "Rhodes",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "065-551-4975",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 27,
      username: "bartosse",
      email: "bartosse@domain.com",
      password: "useruser",
      image: "27.jpg",
      firstname: "Bartosz",
      lastname: "Sexton",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-557-7282",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 28,
      username: "annmarkl",
      email: "annmarkl@domain.com",
      password: "useruser",
      image: "28.jpg",
      firstname: "Ann-Marie",
      lastname: "Klein",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "065-553-2502",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 29,
      username: "kajolwh",
      email: "kajolwh@domain.com",
      password: "useruser",
      image: "29.jpg",
      firstname: "Kajol",
      lastname: "Whittington",
      idDepartment: 2,
      department: "Quality Assurance & Quality Control Department",
      position: "Quality Assurance & Quality Control Department",
      mobileNumber: "085-558-0153",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "active",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
    {
      id: 30,
      username: "evelynst",
      email: "evelynst@domain.com",
      password: "useruser",
      image: "30.jpg",
      firstname: "Evelyn",
      lastname: "Stevenson",
      idDepartment: 6,
      department: "HDPE 4 Production",
      position: "HDPE 4 Production Operator",
      mobileNumber: "085-551-7861",
      workingLocation: "Rayong Site#3",
      site: 3,
      status: "terminate",
      company: "Thai Polyethylene Co., Ltd.",
      follower: 9732,
      following: 4356,
      authorities: ["ROLE_USER"],
    },
  ]);
  const [right, setRight] = React.useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  useEffect(() => {
    setIdRequest(
      request.findIndex((req) =>
        req.link.includes(props.match.params.openposition)
      )
    );
  }, []);

  const customList = (title, items) => (
    <Card variant="outlined" style={{ width: 350, borderRadius: 20 }}>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              "aria-label": "all items selected",
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 350,
          height: 230,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value, index) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar ${index + 1}`}
                  src={`${process.env.REACT_APP_API_URL}image/profile/${value.id}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                id={labelId}
                primary={`${value.firstname} ${value.lastname}`}
                secondary={value.mobileNumber}
              />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  const handleCloseDialog = () => {
    setOpenAddAppointment(false);
    setOpenDeleteCandidate(false);
  };

  return (
    <StyledRoot className={`page`}>
      <Container maxWidth="lg">
        <Typography variant="h4" style={{ padding: "24px 0" }}>
          Information
        </Typography>
        <CardStyle>
          <StyledContent>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Posted day: 08 Dec 2021
            </Typography>
            <div className={`part-one`}>
              <Avatar variant="rounded" src={request[idRequest].icon} />
              <div className={`detail`}>
                <div className={`start`}>
                  <div className="position">
                    <Typography variant="caption" color="text.secondary">
                      ตำแหน่ง
                    </Typography>
                    <Typography variant="h5">
                      {request[idRequest].name}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="caption" color="text.secondary">
                      หน่วยงาน
                    </Typography>
                    <Typography variant="h5">
                      {request[idRequest].department}
                    </Typography>
                  </div>
                </div>
                <div className={`end`}>
                  <div>
                    {request[idRequest].urgent && (
                      <StyledChip label="Urgent" size="small" />
                    )}
                    <Typography
                      component={"div"}
                      variant="caption"
                      color="text.secondary"
                    >
                      เปิดรับสมัคร
                    </Typography>
                    <Typography variant="h4" align="right">
                      {request[idRequest].size}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 16, marginBottom: 8 }}>
              <Typography
                style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}
              >
                Job Description
              </Typography>
              <Typography style={{}}>
                {request[idRequest].description}
              </Typography>
            </div>
            <Divider
              style={{
                margin: "16px 0px",
                borderWidth: "0px 0px thin",
                borderColor: "rgba(145, 158, 171, 0.24)",
                borderStyle: "dashed",
              }}
            />
            <div>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <div className={`wrap-item`}>
                    <Typography className="label" color="text.secondary">
                      <i class="far fa-map-marker-alt"></i>
                      <span>Location</span>
                    </Typography>
                    <Typography className="value">{`${request[idRequest].city}, ${request[idRequest].province}`}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className={`wrap-item`}>
                    <Typography className="label" color="text.secondary">
                      <i class="far fa-calendar-times"></i>
                      <span>Expiration date</span>
                    </Typography>
                    <Typography className="value">12 Dec 2021</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className={`wrap-item`}>
                    <Typography className="label" color="text.secondary">
                      <i class="far fa-paper-plane"></i>
                      <span>Experience</span>
                    </Typography>
                    <Typography className="value">
                      {request[idRequest].exp <= 8
                        ? `${request[idRequest].exp} ปี`
                        : `9 ปีขึ้นไป`}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className={`wrap-item`}>
                    <Typography className="label" color="text.secondary">
                      <i class="far fa-clock"></i>
                      <span>Employee Type</span>
                    </Typography>
                    <Typography className="value">
                      {request[idRequest].typeEmp}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className={`wrap-item`}>
                    <Typography className="label" color="text.secondary">
                      <i class="far fa-hand-holding-usd"></i>
                      <span>Offered Salary</span>
                    </Typography>
                    <Typography className="value">{`${Utils.inputNumberWithCommas(
                      request[idRequest].salary.toString()
                    )} บาท/${
                      request[idRequest].salaryType === "รายเดือน"
                        ? "เดือน"
                        : "วัน"
                    }`}</Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </StyledContent>
        </CardStyle>
        <div style={{ marginBottom: 24 }}></div>
        <CardStyle>
          <StyledContent className={`selected-candidate`}>
            <div className={`part-one`}>
              <Typography variant="h5">Selected Candidate</Typography>
            </div>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>{customList("Choices", left)}</Grid>
              <Grid item>
                <Grid container direction="column" alignItems="center">
                  <Button
                    sx={{ my: 0.5 }}
                    variant="outlined"
                    size="small"
                    onClick={handleCheckedRight}
                    disabled={leftChecked.length === 0}
                    aria-label="move selected right"
                  >
                    &gt;
                  </Button>
                  <Button
                    sx={{ my: 0.5 }}
                    variant="outlined"
                    size="small"
                    onClick={handleCheckedLeft}
                    disabled={rightChecked.length === 0}
                    aria-label="move selected left"
                  >
                    &lt;
                  </Button>
                </Grid>
              </Grid>
              <Grid item>{customList("Candidate", right)}</Grid>
            </Grid>
            <div
              style={{
                marginTop: 36,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <ButtonBlue
                variant="contained"
                startIcon={<i class="fal fa-paper-plane"></i>}
                component={NavLink}
                to="#"
              >Send Candidate</ButtonBlue>
            </div>
          </StyledContent>
        </CardStyle>
      </Container>
    </StyledRoot>
  );
};

export default RequestInformationPage;
