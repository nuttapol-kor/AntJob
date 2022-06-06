import React from "react";
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)(({ statusRequest, boxSize, borderRadius }) => ({
  width: boxSize,
  height: boxSize,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: borderRadius,
  ...(statusRequest === 1 && {
    backgroundColor: "#ebfaf2",
  }),
  ...(statusRequest === 2 && {
    backgroundColor: "#fdf3f5",
  }),
  ...(statusRequest === 0 && {
    backgroundColor: "#fffcd6",
  }),
}));

const StatusRequest = ({ status, fontSize, boxSize, borderRadius }) => {
  const renderIcon = () => {
    if (status === 1) {
      return (
        <i
          className={`fas fa-check-circle`}
          style={{ paddingTop: 2, fontSize: fontSize, color: "#00c292" }}
        ></i>
      );
    } else if (status === 2) {
      return (
        <i
          className={`fas fa-times-circle`}
          style={{ paddingTop: 2, fontSize: fontSize, color: "#e46a76" }}
        ></i>
      );
    } else {
      return (
        <i
          className={`fas fa-question-circle`}
          style={{ paddingTop: 2, fontSize: fontSize, color: "#fec90f" }}
        ></i>
      );
    }
  };

  return (
    <StyledBox statusRequest={status} boxSize={boxSize} borderRadius={borderRadius}>
      {renderIcon()}
    </StyledBox>
  );
};

export default StatusRequest;
