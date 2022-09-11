import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import { Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, TextField, Container, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import ButtonBlue from "../shared/general/ButtonBlue";
import CardRequest from "../shared/general/CardRequest";
import { NavLink } from "react-router-dom";
import { width } from "@mui/system";

const StyledRoot = styled("div")({
  "&.request": {
    paddingBottom: 64,
    "& .request-head": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "100px 50px 0px 50px",
      flexDirection: "column",
      // width: "80%",
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

const Matching = (props) => {
  const { request, me } = props;
  const onlyRequest = request.filter((value) => {
    const { link } = value;
    return link.includes("request")
  })
  const krabungJobTitle = me.map(val => val.job_title)
  const matching = []
  onlyRequest.forEach(val => {
    if (krabungJobTitle.includes(val.name)) {
      matching.push(val)
    }
  })
  console.log(matching)
  const [filterRequestJob, setFilterRequestJob] = useState({
    search: ""
  })
  const handleChangeFilterRequestJob = (event) => {
    const name = event.target.name;
    setFilterRequestJob({
      ...filterRequestJob,
      [name]: event.target.value,
    });
  };
  const rowsFilter = () => {
    if (
      filterRequestJob.search == ""
    ) {
      return matching;
    } else {
      let resultFilter = [...matching];

      if (filterRequestJob.search.length > 0) {
        resultFilter = resultFilter.filter((item) => {
          if (
            item.name
              .indexOf(filterRequestJob.search) >= 0
          )
            return item;
        });
      }
      return resultFilter;
    }
  };
  return (
    <StyledRoot className="request">
      <Container>
      <div className="request-head">
        <img src={require("../assets/mocking.png")} style={{width: "10%"}}/>
      <Typography>คนงานของคุณกำลังนอนชิวอีก 30 คนนะ หางานให้พวกเค้าหน่อยสิ</Typography>
        <FormControl className={`formControl`} variant="outlined" fullWidth>
                <TextField
                fullWidth
                id="outlined-adornment-weight"
                label="ค้นหาตำแหน่ง"
                value={filterRequestJob.search}
                onChange={handleChangeFilterRequestJob}
                name="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                labelWidth={90}
                />
          </FormControl>
          {/* <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: 40 }} />
        <TextField id="input-with-sx" label="With sx" variant="outlined" fullWidth />
        </Box> */}
      </div>

      <div className="wrap-card">
        {rowsFilter()
          .map((value, index) => {
            return <CardRequest key={index} value={value}></CardRequest>;
          })}
      </div>
      </Container>
    </StyledRoot>
  );
};

export default Matching;