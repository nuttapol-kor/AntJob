import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const StyledAvatarOff = styled(Avatar)(({ shift, size }) => ({
  width: 32,
  height: 32,
  fontWeight: 600,
  opacity: 0.8,
  backgroundColor: "#fdf3f5",
  border: "2px solid #e46a76",
  "& .MuiTypography-root": {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 0,
    color: "#e46a76",
  },
}));

export default function AvatarOff({ content }) {
  return (
    <StyledAvatarOff>
      <Typography variant="body2">{"OFF"}</Typography>
    </StyledAvatarOff>
  );
}
