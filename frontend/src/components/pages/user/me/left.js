import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Paper, styled, Typography, Divider } from "@mui/material";

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
          <StyledTextFieldTheme
            label="Company Name"
            name="companyName"
            fullWidth
            value={userProfile.companyName}
          />
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
          <Typography variant="body2" gutterBottom  style={{ fontWeight: 600, marginBottom : 16 }}>Contact detail</Typography>
          <StyledTextFieldTheme
            label="Contact Name"
            name="contactName"
            fullWidth
            value={userProfile.contact.fullname}
          />
          <StyledTextFieldTheme
            label="Email"
            name="email"
            fullWidth
            value={userProfile.contact.email}
          />
          <StyledTextFieldTheme
            label="Phone"
            name="phone"
            fullWidth
            value={userProfile.contact.phone}
          />
        </StyledLeft>
      )}
    </CardStyle>
  );
};

export default LeftPanel;
