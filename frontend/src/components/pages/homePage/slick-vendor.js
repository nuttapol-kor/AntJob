import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import CardVendor from "../shared/general/CardVendor";

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

const SlickVendor = (props) => {
  const { vendor } = props;
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
  return (
    <div>
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
          {vendor.map((value) => {
            return <CardVendor value={value} />;
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

export default SlickVendor;
