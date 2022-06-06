
import React from "react";
import { styled } from "@mui/material";
import { Container, Typography } from "@mui/material";

const StyledContainer = styled(Container)({
    padding: "16px 0",
    "& .wrap":{
        display: "flex",
        alignItems: "center"
    }
})

const Footer = () => {
  return (
    <StyledContainer maxWidth="lg">
      <div className="wrap">
          <Typography variant="body1">Copyright © 2022. Ant Co.,Ltd. All rights reserved.</Typography>
      </div>
    </StyledContainer>
  );
};

export default Footer;
