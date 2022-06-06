import React from "react";
import { Grid, IconButton, Paper, styled, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import jobGroup from "../../assets/data/jobGroup";

const StyledPaper = styled(Paper)({
  height: 96,
  borderRadius: 16,
  position: "relative",
  padding: 16,
  boxSizing: "border-box",
//   "& .wrap-btn-select": {
//     position: "absolute",
//     right: 16,
//     top: 8,
//     "& .MuiButtonBase-root": {
//       backgroundColor: "#0000000a",
//       padding: 2,
//       fontSize: 16,
//     },
//   },
  "& .wrap-name": {
    width: 160,
    "& .MuiTypography-root": {
      fontSize: 20,
    },
  },
  "& .wrap-icon": {
    position: "absolute",
    fontSize: 35,
    color: "#919eab",
    right: 16,
    bottom: 8,
  },
});

function ExpertItem(props) {
  const { value } = props;
  return (
    <StyledPaper variant="outlined">
      {/* <div className="wrap-btn-select">
        <IconButton aria-label="check" size="small">
          <CheckIcon fontSize="inherit" />
        </IconButton>
      </div> */}
      <div className="wrap-name">
        <Typography variant="subtitle">{value.name}</Typography>
      </div>
      <div className="wrap-icon">{value.icon}</div>
    </StyledPaper>
  );
}

const ExpertiseTab = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {jobGroup.map((value, index) => (
          <Grid item xs={12} sm={4}>
            <ExpertItem value={value} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ExpertiseTab;
