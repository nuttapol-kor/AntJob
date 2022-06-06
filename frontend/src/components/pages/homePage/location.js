import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

import SlickLocations from "./slick-locations";
import ButtonBlue from "../shared/general/ButtonBlue";


const StyledRoot = styled("div")({
  paddingBottom: 120,
  "& .category-head": {
    marginBottom: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .wrap-card": {
    position: "relative",
  }
});


const Locations = (props) => {
  const { locations } = props;

  return (
    <StyledRoot>
      <div className="category-head">
        <Typography variant="h5" gutterBottom>
          Locations
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
        <SlickLocations locations={locations} />
      </div>
    </StyledRoot>
  );
};

export default Locations;
