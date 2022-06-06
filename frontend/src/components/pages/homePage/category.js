import React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography } from "@mui/material";

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
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: 12,
    ["@media only screen and (max-width: 600px)"]:{
      gridTemplateColumns: "repeat(1, 1fr)",
    }
  },
});

const StyledCard = styled(Card)({
  boxShadow: "none",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  borderRadius: 16,
  "& .inner": {
    height: "6rem",
    padding: "8px 16px",
    backgroundColor: "#0000007A",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    boxSizing: "border-box",
    "&:hover>div": {
      transform: "translate3d(0,-8px,0)",
    },
    "& div": {
      display: "flex",
      flexDirection: "column",
    },
    "& .MuiTypography-subtitle": {
      color: "#FFFFFF",
      fontSize: 22,
      lineHeight: 1.2,
    },
    "& .MuiTypography-caption": {
      color: "#FFFFFF",
      lineHeight: 1.2,
      fontSize: 14,
    },
  },
});

const Category = (props) => {
  const { jobGroup } = props;
  return (
    <StyledRoot>
      <div className="category-head">
        <Typography variant="h5" gutterBottom>
          Jobs Category
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
        {jobGroup.map((value, index) => {
          return (
            <StyledCard
              key={index}
              style={{ backgroundImage: `url(${value.image})` }}
            >
              <div className="inner">
                <div>
                  <Typography variant="subtitle">{value.name}</Typography>
                  <Typography variant="caption">{`${value.count} Jobs`}</Typography>
                </div>
              </div>
            </StyledCard>
          );
        })}
      </div>
    </StyledRoot>
  );
};

export default Category;
