import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyleButtonOrange = styled(Button)(({ variant }) => ({
  ...(variant === "contained" && {
    borderColor: "#007afd",
    color: "#ffffff",
    backgroundColor: "#007afd",
    borderRadius: 8,
    "&:hover": {
      borderColor: "#fb8c00",
      backgroundColor: "#fb8c00",
    },
  }),
  ...(variant === "outlined" && {
    borderColor: "#007afd",
    backgroundColor: "#ffffff",
    color: "#007afd",
    borderRadius: 8,
    "&:hover": {
      color: "#ffffff",
      borderColor: "#fb8c00",
      backgroundColor: "#fb8c00",
    },
  }),
}));

export default function ButtonOrange({ value, size, variant, onClick, style, startIcon, endIcon }) {
  return <StyleButtonOrange startIcon={startIcon} endIcon={endIcon} style={style} size={size} variant={variant} onClick={onClick}>{value}</StyleButtonOrange>;
}
