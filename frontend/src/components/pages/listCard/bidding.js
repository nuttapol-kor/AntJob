import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import { Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import ButtonBlue from "../shared/general/ButtonBlue";
import CardRequest from "../shared/general/CardRequest";
import { NavLink } from "react-router-dom";
import { width } from "@mui/system";

const StyledRoot = styled("div")({
  "&.bidding": {
    paddingBottom: 64,
    "& .bidding-head": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "100px 50px 0px 50px",
      ["@media only screen and (max-width: 600px)"]:{
        flexDirection: "column"
      },
    },
    "& .wrap-card": {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      columnGap: 12,
      ["@media only screen and (max-width: 600px)"]:{
        gridTemplateColumns: "repeat(1, 1fr)",
      },
      margin: "50px 50px 0px 50px"
      
    },
  },
});

const BiddingList = (props) => {
  const { request } = props;
  const onlyBidding = request.filter((value) => {
    const { link } = value;
    return link.includes("bidding");
  })
  const [filterBiddingJob, setFilterBiddingJob] = useState({
    search: ""
  })
  const handleChangeFilterBiddingJob = (event) => {
    const name = event.target.name;
    setFilterBiddingJob({
      ...filterBiddingJob,
      [name]: event.target.value,
    });
  };
  const rowsFilter = () => {
    if (
      filterBiddingJob.search == ""
    ) {
      return onlyBidding;
    } else {
      let resultFilter = [...onlyBidding];

      if (filterBiddingJob.search.length > 0) {
        resultFilter = resultFilter.filter((item) => {
          if (
            item.name
              .indexOf(filterBiddingJob.search) >= 0
          )
            return item;
        });
      }
      return resultFilter;
    }
  };
  return (
    <StyledRoot className="bidding">
      <div className="bidding-head">
        <FormControl className={`formControl`} variant="outlined">
                <TextField
                fullWidth
                id="outlined-adornment-weight"
                label="ค้นหาตำแหน่ง"
                value={filterBiddingJob.search}
                onChange={handleChangeFilterBiddingJob}
                name="search"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="search" edge="end" size="large">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                labelWidth={90}
                />
          </FormControl>
      </div>

      <div className="wrap-card">
        {rowsFilter()
          .map((value, index) => {
            return <CardRequest key={index} value={value}></CardRequest>;
          })}
      </div>
    </StyledRoot>
  );
};

export default BiddingList;