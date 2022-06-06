import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

const StyledAvatar = styled(Avatar)(({ size }) => ({
  width: size,
  height: size,
  backgroundColor: "transparent",
}));

export default function AvatarPeriod({ title, size, src }) {
  return (
    <StyledAvatar size={size} >
      <img src={src} alt={title} width={size} />
    </StyledAvatar>
  );
}
