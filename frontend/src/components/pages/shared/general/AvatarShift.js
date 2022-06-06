import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const StyledAvatar = styled(Avatar)(({ shift, size, fontSize, opacity }) => ({
  width: size,
  height: size,
  backgroundColor: "transparent",
  "& .MuiTypography-root": {
    fontWeight: "bold",
    fontSize: fontSize,
    lineHeight: 0,
  },
  ...(opacity && {
    opacity: 0.6
  }),
  ...(shift === `A` && {
    backgroundColor: "#ffb94e",
    border: "2px solid #ffb94e",
  }),
  ...(shift === `D` && {
    backgroundColor: "#fe6c76",
    border: "2px solid #fe6c76",
  }),
  ...(shift === `C` && {
    backgroundColor: "#29a2e0",
    border: "2px solid #29a2e0",
  }),
  ...(shift === `B` && {
    backgroundColor: "#02bbb5",
    border: "2px solid #02bbb5",
  }),
}));

export default function AvatarShift({ title, size, fontSize, opacity }) {
  return (
    <StyledAvatar shift={title} size={size} fontSize={fontSize} opacity={opacity}>
      <Typography>{title}</Typography>
    </StyledAvatar>
  );
}
