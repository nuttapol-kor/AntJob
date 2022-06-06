import React, { Fragment, useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { styled } from "@mui/material/styles";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/uicons-bold-rounded.css";
import "./style/uicons-regular-rounded.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, AdminMenu, UserMenu, Footer } from "./components/layouts";
import Routers from "./Routers";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Chip from "@mui/material/Chip";
import { Avatar, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      weight: "4px",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
}));

function App() {
  useStyles();
  const matchesBig = useMediaQuery("(min-width:1200px)");
  const [open, setOpen] = useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    setOpen(matchesBig);
  }, [matchesBig]);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div
        className={`section`}
        style={{ backgroundColor: !isLoggedIn && "#FFFFFF" }}
      >
        <Fragment>
          <Header
            handleDrawerOpen={handleDrawerOpen}
            matchesBig={matchesBig}
            open={open}
            isLoggedIn={isLoggedIn}
          />
        </Fragment>

        <Routers />

        <Footer />

      </div>
    </Router>
  );
}

export default App;
