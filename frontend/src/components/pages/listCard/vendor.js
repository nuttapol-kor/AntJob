import React from "react";
import CardVendor from "../shared/general/CardVendor";
import vendor from "../assets/data/vendor";
import { styled } from "@mui/material/styles";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  Divider,
  Container,
} from "@mui/material";
import locations from "../assets/data/location";
import jobGroup from "../assets/data/jobGroup";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  // backgroundColor: "#f1f4f9",
  paddingBottom: 36,
});

const StyledWrapVendor = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: 12,
//   margin: "0px 50px 0px",
});

const StyledWrapSearch = styled("div")({
  backgroundColor: "#f9fafb",
  borderRadius: 16,
  padding: 32,
  //   width: "100%",
  marginTop: "100px",
  "& .inner": {
    display: "flex",
    "& .inner-item": {
      width: "100%",
    },
    "& .marginLeft": {
      margin: 0,
      marginLeft: 20,
    },
  },
});

const StyledAutocomplete = styled(Autocomplete)({
  width: "100%",
  border: 0,
  "& .MuiFilledInput-root": {
    backgroundColor: "transparent",
    padding: "0 12px",
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
    "& .MuiInputAdornment-root": {
      marginTop: "0!important",
      fontSize: 24,
      color: "#919EAB",
    },
    "& .MuiAutocomplete-endAdornment": {
      "& .MuiButtonBase-root": {
        fontSize: 14,
        width: 22,
        height: 22,
      },
    },
    "&:hover": {
      backgroundColor: "transparent",
      "&:before": {
        border: "none !important",
      },
    },
    "&::after": {
      border: "none",
    },
    "&::before": {
      border: "none",
    },
  },
});

const StyledDivider = styled(Divider)({
  margin: 0,
  marginLeft: 20,
});

const VendorList = () => {
  const rating = [0, 1, 2, 3, 4, 5];
  return (
    <StyledRoot>
      <Container maxWidth="lg">
        <StyledWrapSearch>
          <div className="inner">
            <div className="inner-item">
              <StyledAutocomplete
                id="combo-box-Location"
                options={locations.map((option) => option.name)}
                popupIcon={<i class="fa-light fa-chevron-down"></i>}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    placeholder="จังหวัด"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <i class="fa-light fa-location-dot"></i>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </div>
            <StyledDivider orientation="vertical" flexItem />
            <div className="inner-item marginLeft">
              <StyledAutocomplete
                id="combo-box-Location"
                options={jobGroup.map((option) => option.name)}
                popupIcon={<i class="fa-light fa-chevron-down"></i>}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    placeholder="ประเภทงาน"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <i class="fa-light fa-briefcase"></i>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </div>
            <StyledDivider orientation="vertical" flexItem />
            <div className="inner-item marginLeft">
              <StyledAutocomplete
                id="combo-box-Location"
                options={rating}
                popupIcon={<i class="fa-light fa-chevron-down"></i>}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    placeholder="ความพึงพอใจ"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <i class="fa-light fa-square-star"></i>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </div>
          </div>
        </StyledWrapSearch>
        <StyledWrapVendor>
          {vendor.map((value) => {
            return <CardVendor value={value} />;
          })}
        </StyledWrapVendor>
      </Container>
    </StyledRoot>
  );
};

export default VendorList;
