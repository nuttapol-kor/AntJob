import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";

import StyledCard from "../../../shared/general/CardDark";

import CardSummary from "../cardSummary";
import CardChart from "../cardChart";
import CardRankOTOver36 from "../cardRank";

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

export default function DashboardOT() {
  return (
    <StyledWrapper
      className="page dashboard-page"
      style={{ paddingLeft: 16, paddingRight: 16 }}
    >
      <Typography variant="h4" style={{ marginTop: 16, marginBottom: 16 }}>
        ภาพรวมค่าล่วงเวลา
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
                  label: "ทำงานล่วงเวลา (บาท)",
                  amount: 653234,
                  icon: <i class="fal fa-coins"></i>,
                }}
                top={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardSummary
                value={{
                  label: "ทำงานล่วงเวลา (ชั่วโมง)",
                  amount: 1975,
                  icon: <i class="fal fa-alarm-exclamation"></i>,
                }}
                top={false}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard
          >
            <StyledWrapOT36Hours>
                <Typography color="text.secondary" variant="body1">
                  {`ทำงานล่วงเวลาเกิน 36 ชั่วโมง (คน)`}
                </Typography>
                <Typography variant="h3" align={"left"}>
                  {utils.numberWithCommas(64)}
                </Typography>

                <div className={`iconEmployee`}>
                  <i class="fal fa-siren-on"></i>
                </div>
              </StyledWrapOT36Hours>
          </StyledCard>
        </Grid>
      </Grid>
      <div style={{ marginTop: 16 }}>
        <CardChart
          chart="area"
          chartName={`ค่าใช้จ่ายทำงานล่วงเวลา (บาท)`}
          max={500000}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <CardChart
          chart="area"
          chartName={`ทำงานล่วงเวลาเกิน 36 ชั่วโมง (คน)`}
          max={100}
        />
      </div>
      <div style={{ marginTop: 16, marginBottom: 36 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CardChart
              chart="polarArea"
              chartName={`OT แต่ละประเภท`}
              max={100}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardRankOTOver36 name={`Top 5 ทำงานล่วงเวลาเกิน 36 ชั่วโมง`} unit={`ชม.`}/>
          </Grid>
        </Grid>
      </div>
    </StyledWrapper>
  );
}
