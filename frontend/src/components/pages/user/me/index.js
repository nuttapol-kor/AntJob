import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
  Divider,
} from "@mui/material";

import LeftPanel from "./left";
import RightPanel from "./right";

import { getUserProfile } from "../../../../actions/user";

import BgCover from "../assets/bg-cover.jpg";

const StyledRoot = styled("div")({});

const StyledCover = styled("div")({
  width: "100%",
  height: 250,
  background: `linear-gradient(rgba(22, 28, 36, 0.88), rgba(22, 28, 36, 0.88)) center center / cover no-repeat, url(${BgCover})`
});

const MePage = (props) => {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (currentUser) {
      dispatch(getUserProfile(currentUser.id));
    }
  }, []);

  return (
    <StyledRoot className={`page`}>
      {/* <StyledCover /> */}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <LeftPanel />
          </Grid>
          <Grid item xs={12} sm={8}>
            <RightPanel />
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
};

export default MePage;
