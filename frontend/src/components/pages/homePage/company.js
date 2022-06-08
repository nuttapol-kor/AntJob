import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Card, CardContent, Paper, Typography } from "@mui/material";

import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

import ButtonBlue from "../shared/general/ButtonBlue";
import ReactSlickDemo from "./slick-company";
import { NavLink } from "react-router-dom";

const StyledRoot = styled("div")({
  "& .company-head": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .wrap-card": {
    position: "relative",
  },
});

const StylePaper = styled(Paper)({
  backgroundColor: "transparent",
});

const Company = (props) => {
  const { company } = props;
  return (
    <StyledRoot>
      <div className="company-head">
        <Typography variant="h3">Top Company</Typography>
      </div>
      <div className="wrap-card">
        <ReactSlickDemo company={company} />
      </div>
      <div style={{ textAlign: "center" }}>
        <ButtonBlue 
        variant="outlined"
        endIcon={<ArrowRightAltOutlinedIcon />}
        component={NavLink}
        to="/company/list"
        >
          View All Company
        </ButtonBlue>
      </div>
    </StyledRoot>
  );
};

export default Company;
