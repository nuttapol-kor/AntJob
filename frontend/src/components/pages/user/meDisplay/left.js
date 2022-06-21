import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Paper,
  styled,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import CardStyle from "../../shared/general/Card";
import TextFieldTheme from "../../shared/general/TextFieldTheme";

const StyledLeft = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 24,
  "& .wrap-avater": {
    marginBottom: 36,
    "& .MuiAvatar-root": {
      width: 160,
      height: 160,
      borderRadius: 8,
    },
  },
});

const StyledTextFieldTheme = styled(TextFieldTheme)(({}) => ({
  marginBottom: 16,
}));

const LeftPanel = () => {
  const { result: userProfile } = useSelector((state) => state.userProfile);

  return (
    <CardStyle>
      {userProfile && (
        <StyledLeft>
          <div className="wrap-avater">
            <Avatar variant="rounded" />
          </div>
          {/* <StyledTextFieldTheme
            label="Company Name"
            name="companyName"
            fullWidth
            value={userProfile.companyName}
          /> */}
          <Typography variant="h6" gutterBottom>
            {userProfile.companyName}
          </Typography>
          <Divider
            style={{
              margin: "8px 0px",
              borderWidth: "0px 0px thin",
              borderColor: "#919eab52",
              borderStyle: "dashed",
              width: "100%",
            }}
          />
          <div style={{ marginTop: 16 }}></div>
          <Typography
            variant="body2"
            gutterBottom
            style={{ fontWeight: 600, marginBottom: 16 }}
          >
            Contact detail
          </Typography>
          {/* <StyledTextFieldTheme
            label="Contact Name"
            name="contactName"
            fullWidth
            value={userProfile.contact.fullname}
          /> */}
          <Grid container direction={"column"} spacing={2}>
            <Grid
              item
              container
              justifyContent={"flex-start"}
              alignItems={"center"}
              spacing={1}
            >
              <Grid item>
                <i class="fa-thin fa-circle-user"></i>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {userProfile.contact.fullname}
                </Typography>
              </Grid>
            </Grid>

            {/* <StyledTextFieldTheme
            label="Email"
            name="email"
            fullWidth
            value={userProfile.contact.email}
          /> */}
            <Grid
              item
              container
              justifyContent={"flex-start"}
              alignItems={"center"}
              spacing={1}
            >
              <Grid item>
                <i class="fa-thin fa-envelope"></i>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {userProfile.contact.email}
                </Typography>
              </Grid>
            </Grid>
            {/* <StyledTextFieldTheme
            label="Phone"
            name="phone"
            fullWidth
            value={userProfile.contact.phone}
          /> */}
            <Grid
              item
              container
              justifyContent={"flex-start"}
              alignItems={"center"}
              spacing={1}
            >
              <Grid item>
                <i class="fa-thin fa-mobile-screen-button"></i>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {userProfile.contact.phone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </StyledLeft>
      )}
    </CardStyle>
  );
};

export default LeftPanel;
