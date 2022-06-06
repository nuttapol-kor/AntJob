import React from "react";
import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";

import ButtonBlue from "../shared/general/ButtonBlue";
import CardRequest from "../shared/general/CardRequest";

const StyledRoot = styled("div")({
  "&.request": {
    paddingBottom: 64,
    "& .request-head": {
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

const Request = (props) => {
  const { request } = props;
  return (
    <StyledRoot className="request">
      <div className="request-head">
        <Typography variant="h4" gutterBottom>
          Featured Jobs
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
            return index > 2 && index < 6;
          })
          .map((value, index) => {
            return <CardRequest key={index} value={value}></CardRequest>;
          })}
      </div>
    </StyledRoot>
  );
};

export default Request;
