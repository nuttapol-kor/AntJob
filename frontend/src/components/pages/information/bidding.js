import React, { useEffect, useState, Fragment } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "@mui/material/Link";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import FactoryIcon from "@mui/icons-material/Factory";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";

import DoneAllIcon from "@material-ui/icons/DoneAll";
import CloseIcon from "@material-ui/icons/Close";

// import DialogAddAppointment from "./dialogAddAppointment";
// import DialogDeleteCandidate from "./dialogDeleteCandidate";

import CardStyle from "../shared/general/Card";
import ButtonBlue from "../shared/general/ButtonBlue";

import request from "../assets/data/request";

import Utils from "../../../utils";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingBottom: 36,
  // ["@media (min-width:1200px)"]:{
  //   paddingLeft: 24,
  //   paddingRight: 24
  // }
});

const StyledChip = styled(Chip)({
  color: "#b72136",
  backgroundColor: "#ff484229",
  fontWeight: 700,
  borderRadius: 6,
});

const StyledPaperCandidate = styled(Paper)({
  marginBottom: 16,
  padding: 16,
  borderRadius: 20,
  "& .check": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    "& .Mui-checked": {
      color: "#ff4842",
    },
  },
  "& .review": {
    display: "flex",
    alignItems: "center",
  },
});

const StyledAvatarCandidate = styled(Avatar)({
  width: 64,
  height: 64,
  marginBottom: 16,
});

const StyledContent = styled("div")({
  padding: 36,
  paddingTop: 24,
  "& .part-one": {
    display: "flex",
    alignItems: "flex-start",
    marginTop: 8,
    ["@media only screen and (max-width: 600px)"]:{
      flexDirection: "column"
    },
    "& .detail": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      "& .start": {
        "& .position": {
          marginBottom: 12,
        },
        "& div": {
          marginRight: 32,
          ["@media only screen and (max-width: 600px)"]:{
            marginRight: 0
          },
        },
      },
      "& .end": {
        textAlign: "end",
      },
      ["@media only screen and (max-width: 600px)"]:{
        flexDirection: "column",
        marginTop: 16
      },
    },
    "& .MuiAvatar-root": {
      width: 120,
      height: 120,
      fontSize: 42,
      marginRight: 36,
    },
    "& .MuiTypography-caption": {
      fontSize: 14,
    },
  },
  "& .part-two":{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ["@media only screen and (max-width: 600px)"]:{
      flexDirection: "column"
    },
    "& .placebid":{
      ["@media only screen and (max-width: 600px)"]:{
        marginTop: 16
      },
    }
  },
  "& .wrap-item": {
    "& .label": {
      fontWeight: 400,
      fontSize: 16,
      marginBottom: 4,
      "& span": {
        marginLeft: 16,
      },
    },
    "& .value": {
      fontSize: 18,
      marginLeft: 32,
    },
    "& .fal": {
      marginRight: 8,
    },
  },
  "&.selected-candidate": {
    minHeight: 200,
    "& .part-one": {
      marginBottom: 16,
    },
    "& .wrap-selected-candidate-list": {
      display: "grid",
      columnGap: 16,
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    "& .candidate-id": {
      "& .MuiTypography-h6": {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    "& .date-appointment": {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
    },
  },
  "&.candidate": {
    minHeight: 200,
    "& .part-one": {
      marginBottom: 16,
      display: "flex",
      justifyContent: "space-between",
    },
    "& .wrap-candidate-list": {
      display: "grid",
      columnGap: 16,
      gridTemplateColumns: "repeat(4, 1fr)",
      "& .candidate-id": {
        "& .MuiTypography-h6": {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const BiddingInformationPage = (props) => {
  const [search, setSearch] = React.useState("");
  const [idRequest, setIdRequest] = React.useState(0);
  const [openAddAppointment, setOpenAddAppointment] = React.useState(false);
  const [openDeleteCandidate, setOpenDeleteCandidate] = React.useState(false);
  const [candidate, setCandidate] = React.useState([
    {
      id: "001-234754",
      company: "Vender 1",
      rating: 3.5,
      review: "3.46k",
    },
    {
      id: "001-934234",
      company: "Vender 1",
      rating: 3.5,
      review: "3.46k",
    },
    {
      id: "002-545345",
      company: "Vender 2",
      rating: 3.5,
      review: "3.46k",
    },
    {
      id: "002-234754",
      company: "Vender 2",
      rating: 3.5,
      review: "3.46k",
    },
    {
      id: "003-546333",
      company: "Vender 3",
      rating: 3.5,
      review: "3.46k",
    },
  ]);
  const [selectedCandidate, setSelectedCandidate] = React.useState([
    {
      id: "001-234754",
      company: "Vender 1",
      rating: 3.5,
      review: "3.46k",
    },
    {
      id: "002-234754",
      company: "Vender 2",
      rating: 3.5,
      review: "3.46k",
    },
    {
      id: "003-546333",
      company: "Vender 3",
      rating: 3.5,
      review: "3.46k",
    },
  ]);

  useEffect(() => {
    setIdRequest(
      request.findIndex((req) =>
        req.link.includes(props.match.params.openposition)
      )
    );
  }, []);

  const handleCloseDialog = () => {
    setOpenAddAppointment(false);
    setOpenDeleteCandidate(false);
  };

  return (
    <StyledRoot className={`page`}>
      <Container maxWidth="lg">
        <Typography variant="h4" style={{ padding: "24px 0" }}>
          Information
        </Typography>
        <CardStyle>
          <StyledContent>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Posted day: 08 Dec 2021
            </Typography>
            <div className={`part-one`}>
              <Avatar variant="rounded" src={request[idRequest].icon} />
              <div className={`detail`}>
                <div className={`start`}>
                  <div className="position">
                    <Typography variant="caption" color="text.secondary">
                      ตำแหน่ง
                    </Typography>
                    <Typography variant="h5">
                      {request[idRequest].name}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="caption" color="text.secondary">
                      หน่วยงาน
                    </Typography>
                    <Typography variant="h5">
                      {request[idRequest].department}
                    </Typography>
                  </div>
                </div>
                <div className={`end`}>
                  <div>
                    {request[idRequest].urgent && (
                      <StyledChip label="Urgent" size="small" />
                    )}
                    <Typography
                      component={"div"}
                      variant="caption"
                      color="text.secondary"
                    >
                      เปิดรับสมัคร
                    </Typography>
                    <Typography variant="h4" align="right">
                      {request[idRequest].size}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 16, marginBottom: 8 }}>
              <Typography
                style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}
              >
                Job Description
              </Typography>
              <Typography style={{}}>
                {request[idRequest].description}
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
            <div className="part-two">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <div className={`wrap-item`}>
                    <Typography className="label" color="text.secondary">
                      <i class="far fa-map-marker-alt"></i>
                      <span>Location</span>
                    </Typography>
                    <Typography className="value">{`${request[idRequest].city}, ${request[idRequest].province}`}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className={`wrap-item`}>
                    <Typography className="label" color="text.secondary">
                      <i class="far fa-calendar-times"></i>
                      <span>Close Bidding</span>
                    </Typography>
                    <Typography className="value">12 Dec 2021</Typography>
                  </div>
                </Grid>
              </Grid>

              <div className="placebid">
                <ButtonBlue variant="contained" style={{ width: 230 }}>
                  Place Bid
                </ButtonBlue>
              </div>
            </div>
          </StyledContent>
        </CardStyle>
        <div style={{ marginBottom: 24 }}></div>
        <CardStyle>
          <StyledContent>
            <div>
              <Typography
                style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}
              >
                Conditions
              </Typography>
            </div>
            <div>
              <Typography color="text.third">
                I am Ayesha I'll Create a fun Character logo in hand drawn style
                for Website, Application, Presentation, Social Media, Business
                Cards, Banners, and anything. Just send me a sample just to get
                an idea about the style that you like and your color scheme I'll
                do the rest. I am Ayesha I'll Create a fun Character logo in
                hand drawn style for Website, Application, Presentation, Social
                Media, Business Cards, Banners, and anything. Just send me a
                sample just to get an idea about the style that you like and
                your color scheme I'll do the rest.
              </Typography>
              <div>
                <ol>
                  <li>
                    The Standard License grants you a right to make use of
                    CONTENT you have purchased.
                  </li>
                  <li>
                    You are licensed to use the CONTENT in one end product for
                    yourself or for one client (a "single application"), and the
                    end product can be distributed for free.
                  </li>
                  <li>
                    <Typography style={{ display: "flex" }}>
                      You can{" "}
                      <DoneAllIcon
                        style={{ marginLeft: 8, color: "#219a15" }}
                      />
                    </Typography>
                    <ul style={{ listStyleType: "circle" }}>
                      <li>
                        Use the CONTENT in one end product for a client,
                        transfer that end product to your client, charge them
                        for your services. The license is then transferred to
                        the client.
                      </li>
                      <li>
                        Modify the CONTENT or combine the CONTENT with other
                        works to make a derivative one. The result is subject to
                        this license. This clause applies to extracting single
                        components from the CONTENT and using it in derivative
                        works as well.
                      </li>
                      <li>
                        Use the CONTENT in an end product that is "sold" (one or
                        multiple paying End Users).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Typography style={{ display: "flex" }}>
                      You cannot{" "}
                      <CloseIcon style={{ marginLeft: 8, color: "#ff3034" }} />
                    </Typography>
                    <ul style={{ listStyleType: "circle" }}>
                      <li>
                        If a CONTENT contains code, images, or content sourced
                        from elsewhere under a different license, that theme
                        retains its original license. The license for the code,
                        images, or content will be noted by the CONTENT author.
                        You are responsible for adhering to the original license
                        or clearing it with the author of the code, image, or
                        content.
                      </li>
                      <li>
                        This license can be terminated if you breach it, and you
                        will lose the right to distribute the end product until
                        the CONTENT has been fully removed from it.
                      </li>
                      <li>
                        The author of the CONTENT retains ownership of the
                        CONTENT, but grants you the license on these terms. This
                        license is between the author of the CONTENT and you.
                        MUI is not a party to this license or the one granting
                        you the license.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </StyledContent>
        </CardStyle>
      </Container>
    </StyledRoot>
  );
};

export default BiddingInformationPage;
