import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch } from "react-redux";
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

import { login } from "../../../actions/auth";

const StyledRoot = styled("div")(({}) => ({
  width: "100%",
  backgroundColor: "#ffffff",
  paddingBottom: 200,
  marginTop: 80,
  // ["@media (min-width: 900px)"]: {
  //   marginTop: 76,
  // },
  // ["@media (max-width: 600px)"]: {
    
  // },
}));

const StyledWrapSection = styled("div")(({}) => ({
  width: 350,
  margin: "auto",
}));

const StyledTextFieldTheme = styled(TextFieldTheme)(({}) => ({
  marginTop: 16,
}));

const StyledForgetPassword = styled(Link)(({}) => ({
  fontSize: 14,
}));

const StyledAgree = styled(FormControlLabel)(({}) => ({
  marginTop: 16,
  alignItems: "center",
  "& .MuiCheckbox-root": {
    paddingTop: 0,
    paddingBottom: 0,
  },
  "& .MuiTypography-body1": {
    fontSize: 12,
  },
}));


const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [valueLogin, setValueLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
  
  }, []);


  const handleChangeText = (event) => {
    setValueLogin({ ...valueLogin, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    dispatch(login(valueLogin.email, valueLogin.password))
      .then(() => {
        props.history.push("/");
        window.location.reload();
      })
      .catch((e) => {
        alert("Error");
      });
  };

  return (
    <Fragment>
      <StyledRoot>
        <StyledWrapSection>
          <Typography variant="h3" gutterBottom>
            Sign in
          </Typography>
          <Divider style={{ margin: "28px 0" }} />
          <div style={{}}>
            <Typography gutterBottom>
              Don’t have an account?{" "}
              <Link component={NavLink} to="/register">
                Get started
              </Link>
            </Typography>
            <StyledTextFieldTheme
              label="Email"
              name="email"
              variant="filled"
              fullWidth
              onChange={handleChangeText}
            />
            <StyledTextFieldTheme
              label="Password"
              name="password"
              variant="filled"
              type="password"
              fullWidth
              onChange={handleChangeText}
            />
            <div style={{ marginTop: 16 }}>
              <StyledForgetPassword color="text.secondary" underline="always">
                Forgot your password?
              </StyledForgetPassword>
            </div>
            <div>
              <StyledAgree
                value="end"
                control={<Checkbox />}
                label={
                  <Typography color="text.secondary">Remember me</Typography>
                }
                labelPlacement="end"
              />
            </div>

            <ButtonBlue
              variant={"contained"}
              style={{ marginTop: 16, width: "100%" }}
              component={NavLink}
              to="/login"
              size="large"
              onClick={handleLogin}
            >
              Sign in
            </ButtonBlue>
          </div>
        </StyledWrapSection>
      </StyledRoot>
    </Fragment>
  );
};

export default LoginPage;
