import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";

import Utils from "../../../../utils";

import CardStyle from "./Card";
import {} from "@mui/material";

const StyledCardContent = styled(CardContent)({
  borderRadius: 20,
  backgroundColor: "#FFFFFF",
  "& .part-one": {
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
    "& .MuiAvatar-root": {
      width: 64,
      height: 64,
      borderRadius: 8,
    },
    "& .MuiTypography-h5": {
      fontWeight: 600,
      fontSize: 36,
      lineHeight: 0.75,
    },
  },
  "& .part-two": {
    marginBottom: 16,
    "& .MuiTypography-h5": {
      width: 280,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  "& .part-three": {
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
  },
  "& .part-four": {},
  "& .part-five": {
    "& .wrap-item": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .fal": {
        marginRight: 8,
      },
    },
  },
});

const StyledChip = styled(Chip)({
  color: "#b72136",
  backgroundColor: "#ff484229",
  fontWeight: 700,
  borderRadius: 6,
});

const CardBidding = (props) => {
  const { value } = props;
  return (
    <CardStyle component={NavLink} to={`/admin/request/information/1`}>
      <StyledCardContent>
        <div className={`part-one`}>
          <Avatar variant="rounded" src={value.icon} />
          {value.urgent && <StyledChip label="Urgent" size="small" />}

          <div style={{ textAlign: "end" }}>
            <Typography align="right" variant="h5">
              {value.size}
            </Typography>
            <Typography align="right" variant="caption" color="text.secondary">
              {`เปิดรับสมัคร`}
            </Typography>
          </div>
        </div>
        <div className={`part-two`}>
          <div>
            <Link variant="h5" underline="none" color="text.primary" component={NavLink} to={`/company${value.link}`}>
              {value.name}
            </Link>
            <Typography variant="body2" style={{ color: "#007afd" }}>
              {value.company}
            </Typography>
          </div>
        </div>
        <div className={`part-three`}>
          <i
            class="fal fa-map-marker-alt"
            style={{ color: "#637381", marginRight: 8 }}
          ></i>
          <Typography variant="body2" style={{ color: "#637381" }}>
            {`${value.city}, ${value.province}`}
          </Typography>
        </div>
        <div className={`part-four`}>
          <Typography variant="caption" color="text.secondary">
            Posted day: 08 Dec 2021
          </Typography>
        </div>
        <Divider
          style={{
            margin: "16px 0px",
            borderWidth: "0px 0px thin",
            borderColor: "rgba(145, 158, 171, 0.24)",
            borderStyle: "dashed",
          }}
        />
        <div className={`part-five`}>
          <Grid container>
            <Grid item xs={12}>
              <div>
                <Typography
                  variant="body2"
                  align="center"
                  color="text.third"
                  gutterBottom
                >
                  <i
                    class="fal fa-calendar-times"
                    style={{ marginRight: 8 }}
                  ></i>
                  Close Bidding
                </Typography>
              </div>
              <div className={`wrap-item`}>
                <Typography variant="h5">12 Dec 2021</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </StyledCardContent>
    </CardStyle>
  );
};

export default CardBidding;
