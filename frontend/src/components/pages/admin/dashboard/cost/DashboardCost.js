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
  justifyContent: "flex-start",
  position: "relative",
  padding: 24,
  "& .MuiTypography-h3": {
    fontSize: 60,
  },
  "& .MuiTypography-body1": {
    paddingTop: 24,
  },
  "& .iconEmployee": {
    position: "absolute",
    right: 38,
    bottom: 36,
    "& svg": {
      fontSize: 180,
      opacity: 0.1,
    },
    "& i": {
      fontSize: 100,
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
        ภาพรวมค่าใช้จ่าย
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
                  label: "เงินเดือน (บาท)",
                  amount: 32,
                  icon: <i class="fal fa-lightbulb-dollar"></i>,
                }}
                top={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardSummary
                value={{
                  label: "ค่าล่วงเวลา (บาท)",
                  amount: 86,
                  icon: <i class="fal fa-sack-dollar"></i>,
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
                {`ค่าใช้จ่ายทั้งหมด (บาท)`}
              </Typography>
              <Typography variant="h3" align={"left"}>
                {utils.numberWithCommas(1736443)}
              </Typography>

              <div className={`iconEmployee`}>
                <i class="fal fa-search-dollar"></i>
              </div>
            </StyledWrapOT36Hours>
          </StyledCard>
        </Grid>
      </Grid>
      <div style={{ marginTop: 16 }}>
        <CardChart
          chart="area"
          chartName={`ภาพรวมเงินเดือน (บาท)`}
          max={1000000}
        />
      </div>
      <div style={{ marginTop: 16, marginBottom: 36 }}>
        <CardChart
          chart="area"
          chartName={`ภาพรวมค่าล่วงเวลา (คน)`}
          max={2000000}
        />
      </div>
    </StyledWrapper>
  );
}
