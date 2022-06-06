import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

const StyledCard = styled(Card)({
  boxShadow: "rgb(90 114 123 / 11%) 0px 7px 30px 0px",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: 20,
  "&:hover": {
    boxShadow: "rgb(145 158 171 / 24%) -24px 24px 72px -8px",
  },
  "& .cardTitle": {
    fontSize: 22,
  },
  "& .MuiCardContent-root": {
    padding: 24,
  },
  "& .cardHeader": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  ["@media only screen and (max-width: 600px)"]:{
    marginBottom: 16
  }
});

// export default function CardStyle({ content }) {
//   return <StyledCard>{content}</StyledCard>;
// }

const CardStyle = (props) => {
  const { children } = props;
  return <StyledCard>{children}</StyledCard>;
};

export default CardStyle;
