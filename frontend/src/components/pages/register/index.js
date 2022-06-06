import React, { useState, useEffect, useRef, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Link, Grid } from "@mui/material";

import TranslateIcon from "@mui/icons-material/Translate";

import ButtonBlue from "../shared/general/ButtonBlue";
import TextFieldTheme from "../shared/general/TextFieldTheme";

import Logo from "../assets/logo.png";

import { isEmptyArray } from "formik";
import { Box } from "@mui/system";

const StyledRoot = styled("div")(({}) => ({
  width: "100%",
  backgroundColor: "#ffffff",
  ["@media (min-width: 900px)"]: {
    marginTop: 76,
  },
  ["@media (min-width: 600px)"]: {
    marginTop: 120,
  },
}));

const StyledWrapSection = styled("div")(({}) => ({
  width: 350,
  margin: "auto",
}));

const StyledTextFieldTheme = styled(TextFieldTheme)(({}) => ({
  marginBottom: 16,
}));

const StyledAgree = styled(FormControlLabel)(({}) => ({
  alignItems: "center",
  "& .MuiCheckbox-root": {
    paddingTop: 0,
    paddingBottom: 0,
  },
  "& .MuiTypography-body1": {
    fontSize: 12,
  },
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

const RegisterPage = (props) => {
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
      {/* <ElevationScroll {...props}>
        <StyledAppBar>
          <Toolbar>
            <Container maxWidth="lg">
              <div>
                <img src={Logo} alt="logo" width={75} />
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div className={`headerAction`}>
                <StyledIconButtonTranslate aria-label="translate">
                  <TranslateIcon fontSize="small" />
                </StyledIconButtonTranslate>
              </div>
            </Container>
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll> */}
      <StyledRoot>
        <StyledWrapSection>
          <Typography variant="h3" gutterBottom>
            Sign up
          </Typography>
          <Divider style={{ margin: "28px 0" }} />
          <div style={{ textAlign: "center" }}>
            <StyledTextFieldTheme
              label="First Name"
              variant="filled"
              fullWidth
            />
            <StyledTextFieldTheme
              label="Last Name"
              variant="filled"
              fullWidth
            />
            <StyledTextFieldTheme label="Email" variant="filled" fullWidth />
            <StyledTextFieldTheme
              label="Password"
              variant="filled"
              type="password"
              fullWidth
            />
            <StyledAgree
              value="end"
              control={<Checkbox />}
              label={
                <Typography color="text.secondary">
                  I agree to the <Link href="#">Ant Terms.</Link> Learn about
                  how we use and protect your data in our{" "}
                  <Link href="#">Privacy Policy.</Link>
                </Typography>
              }
              labelPlacement="end"
            />
            <ButtonBlue
              variant={"contained"}
              style={{ marginTop: 16 }}
              component={NavLink}
              to="/login"
            >
              Create Account partner
            </ButtonBlue>
            <ButtonBlue
              size="small"
              variant={"text"}
              style={{ marginTop: 8 }}
              component={NavLink}
              to="/login"
              color="secondary"
            >
              I am already partner
            </ButtonBlue>
          </div>
        </StyledWrapSection>
      </StyledRoot>
    </Fragment>
  );
};

export default RegisterPage;
