import React from "react";
import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";

import ButtonBlue from "../shared/general/ButtonBlue";
import CardBidding from "../shared/general/CardBidding";

const StyledRoot = styled("div")({
  "&.bidding": {
    paddingBottom: 64,
    "& .bidding-head": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
      ["@media only screen and (max-width: 600px)"]:{
        flexDirection: "column"
      }
    },
    "& .wrap-card": {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      columnGap: 12,
      ["@media only screen and (max-width: 600px)"]:{
        gridTemplateColumns: "repeat(1, 1fr)",
      }
    },
  },
});

const Bidding = (props) => {
  const { request } = props;
  return (
    <StyledRoot className="bidding">
      <div className="bidding-head">
        <Typography variant="h4" gutterBottom>
          Bidding Jobs
        </Typography>
        <div>
          <ButtonBlue>
            See All{" "}
            <i
              style={{ lineHeight: 0, paddingLeft: 6 }}
              class="fi fi-br-angle-small-right"
            ></i>
          </ButtonBlue>
        </div>
      </div>

      <div className="wrap-card">
        {request
          .filter((value, index) => {
            return index < 3;
          })
          .map((value, index) => {
            return <CardBidding key={index} value={value}></CardBidding>;
          })}
      </div>
    </StyledRoot>
  );
};

export default Bidding;
