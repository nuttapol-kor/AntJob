import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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

const ReactSlickDemo = (props) => {
  const { company } = props;
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const usersSay = [
    {
      id: 1,
      fullname: "Logan Hartley",
      position: "HR Manager",
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 2,
      fullname: "Maximilian Horn",
      position: "HR Manager",
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 3,
      fullname: "Theodor Sharples",
      position: "HR Manager",
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 4,
      fullname: "Annabella Sweeney",
      position: "HR Manager",
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 5,
      fullname: "Miranda Keith",
      position: "HR Manager",
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 6,
      fullname: "Logan Hartley",
      position: "HR Manager",
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 7,
      fullname: "Maximilian Horn",
      position: "HR Manager",
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 8,
      fullname: "Theodor Sharples",
      position: "HR Manager",
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 9,
      fullname: "Annabella Sweeney",
      position: "HR Manager",
      message:
        " Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    },
    {
      id: 10,
      fullname: "Miranda Keith",
      position: "HR Manager",
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
          slidesToShow={4}
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
          {company.map((value) => {
            return (
              <div>
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
