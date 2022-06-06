import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";

import StyledCard from "../../../shared/general/CardDark";

import CardSummary from "../cardSummary";
import CardChart from "../cardChart";
import CardRank from "../cardRank";

import utils from "../../../../../utils";

const rand40 = () => {
  return Math.floor(Math.random() * 40);
};

const StyledWrapper = styled("div")({
  color: "#e6e5e8",
});

const StyledWrapOT36Hours = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  position: "relative",
  padding: 24,
  "& .MuiTypography-h3": {
    fontSize: 80,
  },
  "& .iconEmployee": {
    position: "absolute",
    right: 16,
    bottom: 36,
    "& svg": {
      fontSize: 180,
      opacity: 0.1,
    },
    "& i": {
      fontSize: 120,
      opacity: 0.1,
    },
  },
});

export default function DashboardWorkingTime() {
  return (
    <StyledWrapper
      className="page dashboard-page"
      style={{ paddingLeft: 16, paddingRight: 16 }}
    >
      <Typography variant="h4" style={{ marginTop: 16, marginBottom: 16 }}>
        ภาพรวมเวลาทำงาน
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardSummary
                value={{
                  label: "พนักงาน(คน)",
                  amount: 235,
                  icon: <GroupsIcon />,
                }}
                top={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardSummary
                value={{
                  label: "ขาดงาน (คน)",
                  amount: 32,
                  icon: <i class="fal fa-do-not-enter"></i>,
                }}
                top={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardSummary
                value={{
                  label: "มาสาย (คน)",
                  amount: 86,
                  icon: <i class="fal fa-alarm-exclamation"></i>,
                }}
                top={false}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <StyledWrapOT36Hours>
              <Typography color="text.secondary" variant="body1">
                {`ลางาน (คน)`}
              </Typography>
              <Typography variant="h3" align={"left"}>
                {utils.numberWithCommas(64)}
              </Typography>

              <div className={`iconEmployee`}>
                <i class="fal fa-umbrella-beach"></i>
              </div>
            </StyledWrapOT36Hours>
          </StyledCard>
        </Grid>
      </Grid>
      <div style={{ marginTop: 16 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CardRank name={`Top 5 ขาดงาน`} unit={`ครั้ง`} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardRank name={`Top 5 มาสาย`} unit={`ครั้ง`} />
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: 16 }}>
        <CardChart chart="area" chartName={`ภาพรวมขาดงาน (คน)`} max={50} />
      </div>
      <div style={{ marginTop: 16, marginBottom: 36 }}>
        <CardChart chart="area" chartName={`ภาพรวมมาสาย (คน)`} max={100} />
      </div>
    </StyledWrapper>
  );
}
