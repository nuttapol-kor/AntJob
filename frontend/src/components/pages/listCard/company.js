import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography, Grid, FormControl, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: 20,
  padding: "40px 24px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    boxShadow: "rgb(145 158 171 / 24%) -24px 24px 72px -8px",
  },
  "& .MuiAvatar-root": {
    width: 128,
    height: 64,
    marginBottom: 16,
  },
  "& .MuiTypography-h6": {
    fontSize: 16,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: 220,
  },
});

const StyledRoot = styled("div")({
    "&.search-root": {
        marginTop: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

const Company = (props) => {
  const { company } = props;
  const [filterCompany, setFilterCompany] = useState({
      search: ""
  })
  const handleChangeFilterCompany = (event) => {
      const name = event.target.name;
      setFilterCompany({
          ...filterCompany,
          [name]: event.target.value,
      });
  };
  const rowsFilter = () => {
      if (
          filterCompany.search == ""
      ) {
          return company;
      } else {
          let resultFilter = [...company];
          if (filterCompany.search.length > 0) {
              resultFilter = resultFilter.filter((item) => {
                  if (
                      item.name
                        .indexOf(filterCompany.search) >= 0
                  )
                    return item;
              });
          }
          return resultFilter;
      }
  };
  return (
    <div
      style={{
        margin: "auto",
        //width: 1050,
      }}
    >
        <StyledRoot className="search-root">
        <FormControl className={`formControl`} variant="outlined">
                <TextField
                fullWidth
                id="outlined-adornment-weight"
                label="ค้นหาตำแหน่ง"
                value={filterCompany.search}
                onChange={handleChangeFilterCompany}
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
        </StyledRoot>
        <Grid container rowSpacing={1}>
                {/* <Box> */}
                    {rowsFilter().map((value) => {
                        return (
                        <Grid item xs={4}>
                            <div style={{ padding: "60px 0" }}>
                            <StyledContent>
                                <Avatar variant="rounded" src={value.icon} />
                                <Typography
                                variant="body1"
                                color="text.secondary"
                                gutterBottom
                                >{`${value.count} Jobs`}</Typography>
                                <Typography variant="h6" align="center" gutterBottom>
                                {value.name}
                                </Typography>
                            </StyledContent>
                            </div>
                        </Grid>
                        );
                    })}
                {/* </Box> */}
            </Grid>
        
    </div>
  );
};

export default Company;
