import React, { Fragment } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link, withRouter, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";

import TranslateIcon from "@mui/icons-material/Translate";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import Logo from "../../../components/pages/assets/Standing Ant 01.png";
import ButtonBlue from "../../pages/shared/general/ButtonBlue";

import { logout } from "../../../actions/auth";
import { Box } from "@mui/system";

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
        "& .partner": {
          ["@media only screen and (max-width: 600px)"]: {
            display: "none",
          },
        },
        "& .contact-us": {
          ["@media only screen and (max-width: 600px)"]: {
            display: "none",
          },
        },
        "& .divider": {
          margin: "0 16px", height: 24,
          ["@media only screen and (max-width: 600px)"]: {
            display: "none",
          },
        },
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
  ["@media only screen and (max-width: 600px)"]: {
    display: "none",
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

const Header = (props) => {
  const { open, matchesBig, isLoggedIn } = props;
  const { user: currentUser } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    dispatch(logout());
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          top: "56px !important",
          right: "190px !important",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          borderRadius: "20px",
          width: "250px",
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box style={{ width: 178, padding: "0 20px", margin: "12px 0" }}>
        <Typography
          variant="h6"
          style={{
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Georgiana Tillman
        </Typography>
        <Typography color="text.secondary">georti@scg.com</Typography>
      </Box>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <HomeOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Home
      </MenuItem>
      <MenuItem component={Link} to="/me">
        <ListItemIcon>
          <PersonOutlineOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem component={Link} to="/login" onClick={logOut}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <div>
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
                  <ButtonBlue
                    variant={"text"}
                    component={NavLink}
                    to="/register"
                    className="partner"
                  >
                    partner
                  </ButtonBlue>
                </div>
                <Divider
                  className="divider"
                  orientation="vertical"
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                  {isLoggedIn ? (
                    <div>
                      <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        color="inherit"
                        onClick={(event) => setAnchorEl(event.currentTarget)}
                        size="large"
                        style={{ marginRight: 8 }}
                      >
                        <Avatar
                          alt={currentUser.username}
                          src={`${process.env.REACT_APP_API_URL}image/profile/${currentUser.image}`}
                        />
                      </IconButton>
                    </div>
                  ) : (
                    <Fragment>
                      <ButtonBlue variant={"outlined"} className="contact-us">
                        Contact Us
                      </ButtonBlue>
                      <ButtonBlue
                        variant={"contained"}
                        style={{ marginLeft: 8 }}
                        component={NavLink}
                        to="/login"
                      >
                        Sign in
                      </ButtonBlue>
                    </Fragment>
                  )}

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
      {renderMenu}
    </div>
  );
};

export default withRouter(Header);
