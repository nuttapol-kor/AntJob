import React from "react";
import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";

import ButtonBlue from "../shared/general/ButtonBlue";
import CardRequest from "../shared/general/CardRequest";
import { NavLink } from "react-router-dom";

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
      },
      margin: "100px 50px 0px 50px"
      
    },
  },
});

const RequestList = (props) => {
  const { request } = props;
  return (
    <StyledRoot className="request">
      <div className="request-head">
        {/* <Typography variant="h4" gutterBottom>
          Featured Jobs
        </Typography>
        <div>
          <ButtonBlue
          component={NavLink}
          to="/request/list">
            See All{" "}
            <i
              style={{ lineHeight: 0, paddingLeft: 6 }}
              class="fi fi-br-angle-small-right"
            ></i>
          </ButtonBlue>
        </div> */}
      </div>

      <div className="wrap-card">
        {request
          .filter((value) => {
            const { link } = value;
            return link.includes("request");
          })
          .map((value, index) => {
            return <CardRequest key={index} value={value}></CardRequest>;
          })}
      </div>
    </StyledRoot>
  );
};

export default RequestList;