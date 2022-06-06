import React, { useState, useEffect, useRef, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import clsx from "clsx";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Avatar, Grid } from "@mui/material";

import DoneAllIcon from "@material-ui/icons/DoneAll";
import TranslateIcon from "@mui/icons-material/Translate";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";

//import ScrollAnimation from "react-animate-on-scroll";
import { AnimationOnScroll } from "react-animation-on-scroll";
import LightSpeed from "react-reveal/LightSpeed";

import ButtonBlue from "../shared/general/ButtonBlue";

import Logo from "../assets/logo.png";

import S1 from "./assets/S1.png";
import CustomerService from "./assets/customerservice.png";

import "./index.css";

import { isEmptyArray } from "formik";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  root: {
    width: "100%",
    "& .MuiTypography-root": {
      fontFamily: `'Francois One' !important`,
      color: "#212B36",
    },
  },
  bg: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  firstBg: {
    height: 650,
  },
  secondBg: {
    height: 300,
    "& .wrapSecondContent": {
      height: "100%",
      "& .left": {
        "& .left-2": {
          fontSize: 20,
          marginTop: 16,
        },
        ["@media only screen and (max-width: 600px)"]: {
          marginTop: 36,
          margin: "0 8px",
          textAlign: "center",
        },
        ["@media only screen and (min-width:600px)"]: {},
        ["@media only screen and (min-width:768px)"]: {
          marginTop: 72,
          margin: "auto",
          width: "70%",
          textAlign: "center",
          "& .left-2": {
            fontSize: 20,
            marginTop: 16,
            width: "100%",
          },
        },
        ["@media only screen and (min-width:992px)"]: {
          "& .left-2": {
            maxWidth: 450,
          },
          marginTop: 120,
          marginLeft: 56,
        },
      },
      "& .right": {
        "& .inner-right": {
          position: "relative",
          height: "100%",
          ["@media only screen and (max-width: 600px)"]: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            flexWrap: "wrap",
            padding: "20px 0",
            width: "100%",
            "& .item1, .item2, .item3, .item4, .item5, .item6, .item7": {
              display: "flex",
              margin: 16,
            },
          },
          ["@media only screen and (min-width:600px)"]: {},
          ["@media only screen and (min-width:768px)"]: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            flexWrap: "wrap",
            padding: "20px 0",
            width: "80%",
            "& .item1, .item2, .item3, .item4, .item5, .item6, .item7": {
              display: "flex",
              margin: 16,
            },
          },
          ["@media only screen and (min-width:992px)"]: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            flexWrap: "wrap",
            padding: "100px 0",
            width: "80%",
            "& .item1, .item2, .item3, .item4, .item5, .item6, .item7": {
              display: "flex",
              margin: 16,
            },
          },
          ["@media only screen and (min-width:1200px)"]: {
            display: "block",
            justifyContent: "center",
            margin: 0,
            flexWrap: "wrap",
            padding: 0,
            width: "100%",
            "& .item1": {
              position: "absolute",
              top: 80,
              left: "30%",
            },
            "& .item2": {
              position: "absolute",
              top: 80,
              right: "30%",
            },
            "& .item3": {
              position: "absolute",
              top: 230,
              left: "20%",
            },
            "& .item4": {
              position: "absolute",
              top: 230,
              left: "42.5%",
            },
            "& .item5": {
              position: "absolute",
              top: 230,
              right: "20%",
            },
            "& .item6": {
              position: "absolute",
              top: 380,
              right: "30%",
            },
            "& .item7": {
              position: "absolute",
              top: 380,
              left: "30%",
            },
          },
        },
      },
    },
    ["@media only screen and (max-width: 600px)"]: {
      height: 900,
    },
    ["@media only screen and (max-width: 320px)"]: {
      height: 1000,
    },
  },
  avatarAndBoost: {
    textAlign: "center",
  },
  thirdBg: {
    "& .MuiTypography-h3": {
      ["@media only screen and (max-width: 600px)"]: {
        padding: "16px 0",
        textAlign: "center",
      },
      ["@media only screen and (min-width:768px)"]: {
        padding: "16px 0",
        textAlign: "center",
      },
      ["@media only screen and (min-width:992px)"]: {
        paddingTop: 24,
        paddingLeft: 56,
        textAlign: "left",
      },
    },

    ["@media only screen and (max-width: 600px)"]: {},
    ["@media only screen and (max-width: 320px)"]: {},
  },
  fourBg: {
    "& .MuiTypography-h3": {
      padding: "32px 0",
    },
  },
  itemSectFour: {
    maxWidth: 500,
    "& .text-2": {
      minHeight: 48,
      fontSize: 22,
    },
    "& .itemImageSectFour": {
      margin: "36px 0",
    },
  },
  fiveBg: {
    height: 482,
    "& .wrapContentFive": {
      height: "100%",
      "& .left": {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
      "& .innerContent": {
        height: "100%",
        maxWidth: 550,
        margin: "auto",
        "& .MuiTypography-h3": {
          paddingTop: 75,
          ["@media only screen and (max-width: 600px)"]: {
            paddingTop: 28,
          },
        },
        "& .MuiTypography-h6": {
          paddingTop: 24,
        },
      },
    },
    "& .MuiTypography-h4": {
      paddingLeft: 56,
    },
  },
  sixBg: {
    ["@media only screen and (max-width: 600px)"]: {
      height: 650,
    },
  },
  avatar: {
    width: 80,
    height: 80,
  },
});

const StyledRoot = styled("div")(({}) => ({
  backgroundColor: "#ffffff",
  ["@media (min-width: 900px)"]: {
    marginTop: 76,
  },
  ["@media (min-width: 600px)"]: {
    marginTop: 64,
  },
}));

const StyledWrapSectionOne = styled("div")(({}) => ({
  marginBottom: 60,
  marginTop: 60,
  padding: "30px 0px",
  textAlign: "center",
}));

const StyledWrapCustomerService = styled("div")(({}) => ({
  marginBottom: 120,
  backgroundColor: "#F9FAFB",
  padding: "30px 0px",
  "& .wrapDetail": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    "& .item": {
      marginBottom: 24,
      "& .label": {
        display: "flex",
        marginBottom: 8,
      },
    },
  },
}));

const StyledWrapCopyRight = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 36,
}));

const StyledAppBar = styled(AppBar)(({}) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  "& .MuiToolbar-regular": {
    color: "#212b36",
    backgroundColor: "#ffffffcc",
    transition:
      "height 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    backdropFilter: "blur(6px)",
    ["@media (min-width: 900px)"]: {
      height: 76,
    },

    "& .MuiContainer-root": {
      display: "flex",
      alignItems: "center",
      "& .headerAction": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
    },
  },
}));

const StyledIconButtonTranslate = styled(IconButton)(({}) => ({
  border: "1px solid #00000030",
  borderRadius: 8,
  marginLeft: 8,
  "&:hover": {
    transform: "scale(1.09) translateZ(0px)",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Landing = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
      isMobile: window.screen.width <= 768,
    });
  }, []);

  const { nav1, nav2 } = state;

  return (
    <Fragment>
      <ElevationScroll {...props}>
        <StyledAppBar>
          <Toolbar>
            <Container maxWidth="lg">
              <div>
                <img src={Logo} alt="logo" width={75} />
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div className={`headerAction`}>
                <div>
                  <ButtonBlue variant={"text"} component={NavLink}
                    to="/register">partner</ButtonBlue>
                </div>
                <Divider
                  style={{ margin: "0 16px", height: 24 }}
                  orientation="vertical"
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ButtonBlue variant={"outlined"}>Contact Us</ButtonBlue>
                  <ButtonBlue
                    variant={"contained"}
                    style={{ marginLeft: 8 }}
                    component={NavLink}
                    to="/login"
                  >
                    Sign in
                  </ButtonBlue>
                  <div>
                    <StyledIconButtonTranslate aria-label="translate">
                      <TranslateIcon fontSize="small" />
                    </StyledIconButtonTranslate>
                  </div>
                </div>
              </div>
            </Container>
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      <StyledRoot className={`${classes.root}`}>
        <StyledWrapSectionOne>
          <img src={S1} alt="s1" />
        </StyledWrapSectionOne>
        <StyledWrapCustomerService>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12} sm={6}>
                <div className={`wrapDetail`}>
                  <div className={`item`}>
                    <div className={`label`}>
                      <MailOutlineIcon
                        style={{ marginRight: 8, color: "#007afe" }}
                      />
                      <Typography style={{ color: "#007afe" }}>
                        Email
                      </Typography>
                    </div>
                    <Typography variant="h5" style={{ fontSize: 30 }}>
                      customer_service@anthr.com
                    </Typography>
                  </div>
                  <div className={`item`}>
                    <div className={`label`}>
                      <PhoneIphoneOutlinedIcon
                        style={{ marginRight: 8, color: "#007afe" }}
                      />
                      <Typography style={{ color: "#007afe" }}>
                        Phone
                      </Typography>
                    </div>
                    <Typography variant="h5" style={{ fontSize: 30 }}>
                      082-889-4498
                    </Typography>
                  </div>
                  <div className={`item`}>
                    <div className={`label`}>
                      <FmdGoodOutlinedIcon
                        style={{ marginRight: 8, color: "#007afe" }}
                      />
                      <Typography style={{ color: "#007afe" }}>
                        Address
                      </Typography>
                    </div>
                    <Typography variant="h5" style={{ fontSize: 30 }}>
                      Bangkok, Thailand
                    </Typography>
                  </div>
                  <Divider style={{ borderStyle: "dashed", width: 350 }} />
                  <div>
                    <Typography style={{ marginTop: 16 }}>FOLLOW US</Typography>
                    <div>
                      <IconButton
                        aria-label="facebook"
                        size="large"
                        style={{ marginRight: 16 }}
                      >
                        <FacebookIcon
                          fontSize="small"
                          style={{ color: "#212B36", fontSize: 25 }}
                        />
                      </IconButton>
                      <IconButton
                        aria-label="line"
                        size="large"
                        style={{ marginRight: 16 }}
                      >
                        <i
                          class="fab fa-line"
                          style={{ color: "#212B36", fontSize: 22 }}
                        ></i>
                      </IconButton>
                      <IconButton
                        aria-label="linkedin"
                        size="large"
                        style={{ marginRight: 16 }}
                      >
                        <i
                          class="fab fa-linkedin"
                          style={{ color: "#212B36", fontSize: 22 }}
                        ></i>
                      </IconButton>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={CustomerService}
                    alt="CustomerService"
                    width="400"
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </StyledWrapCustomerService>
        <StyledWrapCopyRight>
          <img src={Logo} alt="logo" width="75" />
          <Typography>© All rights reserved</Typography>
          <Typography>made by minimals.cc</Typography>
        </StyledWrapCopyRight>
      </StyledRoot>
    </Fragment>
  );
};

export default Landing;
