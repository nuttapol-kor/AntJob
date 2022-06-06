import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";

import utils from "../../../../utils";

import StyledCard from "../../shared/general/CardDark";

const rand40 = () => {
  return Math.floor(Math.random() * 40);
};

const StyledAvatar = styled(Avatar)({
  width: 40,
  height: 40,
});

const StyledWrapper = styled("div")({
  color: "#e6e5e8",
});

const StyledCellName = styled("div")({
  display: "flex",
  alignItems: "center",
  "& .MuiAvatar-root": {
    marginRight: 8,
  },
  "& .MuiTypography-h6": {
    lineHeight: 1,
  },
  "& .MuiTypography-body2": {
    color: "#999999",
    fontStyle: "oblique",
  },
});

const StyledWrapEmployees = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  "& .iconEmployee": {
    position: "absolute",
    right: 16,
    "& svg": {
      fontSize: 150,
      opacity: 0.1,
    },
    "& i": {
      fontSize: 80,
      opacity: 0.1,
    },
  },
});

export default function CardSummary(props) {
  const { value, top } = props;
  return (
    <StyledCard>
      <StyledWrapEmployees>
        <div
          style={{
            padding: 24,
            width: "80%",
            display: "flex",
            flexDirection: top ? "column" : "column-reverse",
          }}
        >
          <Typography color="text.secondary" variant="body1">
            {value.label}
          </Typography>
          <Typography variant="h3" align={top ? "center" : "left"}>
            {utils.numberWithCommas(value.amount)}
          </Typography>
        </div>

        <div className={`iconEmployee`}>{value.icon}</div>
      </StyledWrapEmployees>
    </StyledCard>
  );
}
