import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography, Card } from "@mui/material";

import locations from "../assets/data/location";

const WrapAvatar = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 84,
  height: 96,
}));

const StyledBox = styled(Box)(({}) => ({
  "&.arrow": {
    position: "absolute",
    marginTop: -20,
    top: "50%",
    zIndex: 9,
  },
  "&.right": {
    right: -60,
  },
  "&.left": {
    left: -60,
  },
}));

const StyledCard = styled(Card)({
  //width: 150,
  boxShadow: "none",
  borderRadius: 16,
  border: "1px solid #919eab3d",
  margin: 8,
  "&:hover": {
    cursor: "pointer",
    transition:
      "color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,transform 0.15s ease-in-out",
    transform: "translateY(-5px)",
  },
  "& .inner": {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    "& div": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
    },
    "& .MuiTypography-subtitle": {
      fontSize: 22,
      lineHeight: 1.2,
    },
    "& .MuiTypography-caption": {
      lineHeight: 1.2,
      fontSize: 14,
    },
    "& .MuiAvatar-root": {
      width: 100,
      height: 100,
      marginBottom: 16,
    },
  },
});

const SlickLocations = (props) => {
  const { locations } = props;
  const history = useHistory();
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { nav1, nav2 } = state;

  const gotoNext = () => {
    slider1.current.slickNext();
  };

  const gotoPrev = () => {
    slider1.current.slickPrev();
  };

  const handleClickLocation = (query) => {
    history.push("/vendor-suggestion?province=" + query);
  }

  return (
    <div
      style={{
        margin: "auto",
        //width: 1050,
      }}
    >
      <StyledBox className={`arrow left`}>
        <IconButton aria-label="prev" size="large" onClick={() => gotoPrev()}>
          <ArrowBackIcon style={{ color: "#999999" }} />
        </IconButton>
      </StyledBox>
      <Box>
        <Slider
          arrows={false}
          asNavFor={nav2}
          ref={(slider) => (slider1.current = slider)}
          infinite={true}
          slidesToShow={6}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {locations.map((value, index) => {
            return (
              <div>
                <StyledCard key={index} onClick={() => handleClickLocation(value.link)}>
                  <div className="inner">
                    <Avatar src={value.image} />
                    <div>
                      <Typography variant="subtitle" gutterBottom>
                        {value.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >{`${value.place} Places`}</Typography>
                    </div>
                  </div>
                </StyledCard>
              </div>
            );
          })}
        </Slider>
      </Box>
      <StyledBox className={`arrow right`}>
        <IconButton aria-label="next" size="large" onClick={() => gotoNext()}>
          <ArrowForwardIcon style={{ color: "#999999" }} />
        </IconButton>
      </StyledBox>
    </div>
  );
};

export default SlickLocations;
