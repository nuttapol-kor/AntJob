import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

const StyledCard = styled(Card)({
  backgroundColor: "rgb(33, 43, 54)",
  color: "rgb(255, 255, 255)",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  backgroundImage: "none",
  overflow: "hidden",
  boxShadow:
    "rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px",
  borderRadius: 16,
  position: "relative",
  zIndex: 0,
  padding: 0,
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
});

const CardChartStyle = ({children}) => {
	return(
		<StyledCard>
			{children}
		</StyledCard>
	)
}

export default CardChartStyle;