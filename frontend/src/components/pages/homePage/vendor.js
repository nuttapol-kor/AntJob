import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Card, CardContent, Paper, Typography } from "@mui/material";

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import ButtonBlue from "../shared/general/ButtonBlue";
import { NavLink } from "react-router-dom";
import SlickVendor from "./slick-vendor";

const StyledRoot = styled("div")({
  marginTop: 20,
  "& .vendor-head": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30
  },
  "& .wrap-card": {
    marginBottom: 30,
    position: "relative",
  },
});

const StylePaper = styled(Paper)({
  backgroundColor: "transparent",
});

const Vendor = (props) => {
  const { vendor } = props;
  const vendorCut = vendor.slice(0,5);
  return (
    <StyledRoot>
      <div className="vendor-head">
        <Typography variant="h3">Top Vendor</Typography>
      </div>
      <div className="wrap-card">
        <SlickVendor vendor={vendorCut} />
      </div>
      <div style={{ textAlign: "center" }}>
        <ButtonBlue
          variant="outlined"
          endIcon={<ArrowRightAltOutlinedIcon />}
          component={NavLink}
          to="/vendor/list"
        >
          View All Vendor
        </ButtonBlue>
      </div>
    </StyledRoot>
  );
};

export default Vendor;
