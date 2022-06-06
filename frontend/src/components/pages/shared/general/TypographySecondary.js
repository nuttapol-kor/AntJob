import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";


const StyledTypography = styled(Typography)({
    color: "#999999"
  });
  
export default function TypographySecondary({value}) {
    return (
        <StyledTypography>{value}</StyledTypography>
    )
}