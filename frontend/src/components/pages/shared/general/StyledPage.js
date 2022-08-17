import React from "react";
import { styled } from "@mui/material";

const StyledPage = styled('div')(({bgcolor}) => ({
    minWidth: 350,
    minHeight: "calc(100vh - 168px)",
    width: "100%",
    backgroundColor: bgcolor? bgcolor: "#ffffff!important",
    paddingBottom: 36,
}))

export default StyledPage;