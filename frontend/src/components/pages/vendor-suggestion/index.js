import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {
  Chip,
  Typography,
  IconButton,
  Box,
  Divider,
  Container,
  InputAdornment,
  Avatar,
  Rating,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import locations from "../assets/data/location";
import jobGroup from "../assets/data/jobGroup";
import vendor from "../assets/data/vendor";

import utils from "../../../utils";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingBottom: 36,
});

const StyledWrapSearch = styled("div")({
  backgroundColor: "#f9fafb",
  borderRadius: 16,
  padding: 32,
  width: "100%",
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

const StyledWrapVendor = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: 12,
});

const StyledContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: 20,
  padding: "20px 0",
  "& .header": {
    display: "flex",
    justifyContent: "space-between",
  },
  "&:hover": {
    backgroundColor: "#FFFFFF",
    boxShadow: "rgb(145 158 171 / 24%) -24px 24px 72px -8px",
  },
  "& .MuiAvatar-root": {
    width: 180,
    height: 150,
    marginBottom: 16,
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
  },
  "& .MuiTypography-h6": {
    fontSize: 22,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: 280,
  },
});

const StyledRating = styled(Rating)({
  marginTop: 8,
  "& .MuiRating-iconFilled": {
    color: "#ffc81a",
  },
  "& .MuiRating-iconHover": {
    color: "#ffc81a",
  },
});
const StyledChip = styled(Chip)({
  backgroundColor: "#919eab1f",
  borderRadius: 8,
  color: "#637381",
});

const VendorSuggestionPage = () => {
  const rating = [0, 1, 2, 3, 4, 5];
  const [favorite, setFavorite] = useState([true, false, false, false, true]);

  const handleClickFavorite = (index) => {
    var tempFavorite = [...favorite];
    tempFavorite[index] = !tempFavorite[index];
    setFavorite(tempFavorite);
  };
  return (
    <StyledRoot className={`page`}>
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
          {vendor.map((value, index) => {
            return (
              <div key={index} style={{ padding: "40px 0" }}>
                <StyledContent>
                  <div style={{ width: "80%" }}>
                    <div className="header">
                      <StyledChip
                        label={
                          <Typography>
                            <i class="fa-regular fa-users" style={{ marginRight: 8 }}></i>
                            {utils.numberWithCommas(value.amount)}
                          </Typography>
                        }
                      />
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => handleClickFavorite(index)}
                      >
                        {favorite[index] ? (
                          <FavoriteIcon
                            fontSize="small"
                            style={{ color: "#fe4842" }}
                          />
                        ) : (
                          <FavoriteBorderIcon fontSize="small" />
                        )}
                      </IconButton>
                    </div>
                  </div>
                  <Avatar variant="rounded" src={value.image} />
                  <Typography variant="h6" align="center" gutterBottom>
                    {value.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >{`ระดับ ${value.level}`}</Typography>
                  <StyledRating
                    readOnly
                    name="customized-color"
                    defaultValue={2}
                    precision={1}
                    icon={<i class="fa-solid fa-star"></i>}
                    emptyIcon={<i class="fa-duotone fa-star"></i>}
                  />
                </StyledContent>
              </div>
            );
          })}
        </StyledWrapVendor>
      </Container>
    </StyledRoot>
  );
};

export default VendorSuggestionPage;
