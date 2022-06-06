import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./index.css";

import Quote from "./assets/quote.png";
import Quote1 from "./assets/quote1.png";
import Quote2 from "./assets/quote2.png";
import Quote3 from "./assets/quote3.png";
import Quote4 from "./assets/quote4.png";
import Quote5 from "./assets/quote5.png";
import { Typography } from "@mui/material";

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
    right: 0,
  },
  "&.left": {
    left: 0,
  },
}));

const ReactSlickDemo = () => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const usersSay = [
    {
      id: 1,
      fullname: "Logan Hartley",
      position: "HR Manager",
      image: Quote1,
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 2,
      fullname: "Maximilian Horn",
      position: "HR Manager",
      image: Quote2,
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 3,
      fullname: "Theodor Sharples",
      position: "HR Manager",
      image: Quote3,
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 4,
      fullname: "Annabella Sweeney",
      position: "HR Manager",
      image: Quote4,
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 5,
      fullname: "Miranda Keith",
      position: "HR Manager",
      image: Quote5,
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 6,
      fullname: "Logan Hartley",
      position: "HR Manager",
      image: Quote1,
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 7,
      fullname: "Maximilian Horn",
      position: "HR Manager",
      image: Quote2,
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 8,
      fullname: "Theodor Sharples",
      position: "HR Manager",
      image: Quote3,
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 9,
      fullname: "Annabella Sweeney",
      position: "HR Manager",
      image: Quote4,
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 10,
      fullname: "Miranda Keith",
      position: "HR Manager",
      image: Quote5,
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
  ];

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

  return (
    <div
      style={{
        margin: "auto",
        marginTop: 32,
        width: 564,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={Quote} alt="quote" width={50} />
      </div>
      <StyledBox className={`arrow left`}>
        <IconButton aria-label="prev" size="large" onClick={() => gotoPrev()}>
          <ArrowBackIcon style={{ color: "#999999" }} />
        </IconButton>
      </StyledBox>
      <Box style={{ marginTop: 16, marginBottom: 40 }}>
        <Slider
          arrows={false}
          asNavFor={nav2}
          ref={(slider) => (slider1.current = slider)}
          infinite={true}
        >
          {usersSay.map((value) => {
            return (
              <div>
                <Typography variant="h6" align="center">
                  {value.message}
                </Typography>
              </div>
            );
          })}
        </Slider>
      </Box>
      <Box style={{ maxWidth: 420, marginRight: "auto", marginLeft: "auto" }}>
        <Slider
          arrows={false}
          asNavFor={nav1}
          ref={(slider) => (slider2.current = slider)}
          slidesToShow={4}
          centerMode={true}
          swipeToSlide={true}
          focusOnSelect={true}
          className={"center avatar"}
        >
          {usersSay.map((value) => {
            return (
              <div>
                <WrapAvatar className={`wrap-avatar`}>
                  <Avatar alt="Remy Sharp" src={value.image} />
                </WrapAvatar>
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

export default ReactSlickDemo;
