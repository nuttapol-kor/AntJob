import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Fab,
  Button,
  Divider,
} from "@mui/material";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { Rating } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

import dayjs from "dayjs";

import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserService from "../../../../services/user.service";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  centerContent: {},
  avatar: {
    height: 100,
    width: 100,
    borderBlockColor: "black",
  },
  main: {
    position: "relative",
    marginBottom: theme.spacing(4),
    border: "1px solid #DFDFDF",
  },
  mainCenter: {
    position: "relative",
    padding: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
      textAlign: "left",
    },
  },
  mainCenter: {
    position: "relative",
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
  },
  seconContent: {
    position: "relative",
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const ViewProfile = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { result: allUser } = useSelector((state) => state.user);
  const { result: review } = useSelector((state) => state.review);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const id = props.match.params.id;
      try {
        const { data: result } = await UserService.getUserProfile(id);
        setProfile(result);
      } catch (e) {
        console.log(e);
      }
    };
    if (props.match.params.id) {
      console.log("call function");
      fetchData();
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className={`page`}>
          {profile ? (
            <Container maxWidth="md">
              <Paper className={classes.main}>
                <Grid container justifyContent="center">
                  <Grid item xs={12} sm={3} md={2}>
                    <div
                      className={classes.mainCenter}
                      style={{ textAlign: "center" }}
                    >
                      <Avatar
                        className={classes.avatar}
                        style={{ left: "15%" }}
                        src={`${process.env.REACT_APP_API_URL}image/profile/${profile.image}`}
                      ></Avatar>
                      <br />
                      <Rating
                        style={{ alignItems: "center" }}
                        value={4.3}
                        readOnly
                        size="small"
                        precision={0.5}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={5} md={7}>
                    <div className={classes.mainCenter}>
                      <Typography variant="h4" component="h2">
                        {`${profile.firstname} ${profile.lastname}`}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{
                          fontSize: "18px",
                          color: "#3F3F3F",
                        }}
                      >
                        {profile.position}
                      </Typography>
                      <br />
                      <Typography variant="h6">Contect</Typography>
                      <div>
                        <Fab
                          size="small"
                          style={{
                            backgroundColor: "#3967A2",
                            textDecoration: "none",
                            marginRight: "10px",
                          }}
                          aria-label="tel"
                          value={profile.mobileNumber}
                        >
                          <PhoneIcon style={{ color: "white" }} />
                        </Fab>
                        <Fab
                          size="small"
                          style={{
                            backgroundColor: "#3967A2",
                            textDecoration: "none",
                            marginRight: "10px",
                          }}
                          aria-label="email"
                          value={profile.email}
                        >
                          <MailOutlineIcon style={{ color: "white" }} />
                        </Fab>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <div
                      className={classes.seconContent}
                      style={{ justify: "center" }}
                    >
                      <Typography
                        variant="h6"
                        component="p"
                        style={{ textAlign: "center" }}
                      >
                        price/hours
                      </Typography>
                      <div
                        style={{
                          textAlign: "center",
                          backgroundColor: "#3967A2",
                          margin: "0px 40px 0px 40px",
                          borderRadius: 20,
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="p"
                          style={{ color: "#fff" }}
                        >
                          {profile.price} $
                        </Typography>
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          marginTop: 20,
                        }}
                      >
                        {profile.price != null && (
                          <Button
                            variant="contained"
                            style={{
                              color: "#fff",
                              backgroundColor: "#4caf50",
                            }}
                            to={`/coaching/coachee-Booking/${profile.id}`}
                            component={NavLink}
                          >
                            Book
                          </Button>
                        )}
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.main} style={{ marginTop: 50 }}>
                <div className={classes.mainCenter}>
                  <Typography variant="h5" component="h6" gutterBottom>
                    Profile
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="subtitle1" component="p">
                    {profile.profile}
                  </Typography>
                </div>
              </Paper>
              <Paper className={classes.main}>
                <div className={classes.mainCenter}>
                  <Typography variant="h5" component="h6" gutterBottom>
                    Experdence
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="subtitle1" component="p">
                    {profile.experdence}
                  </Typography>
                </div>
              </Paper>
              <Paper className={classes.main} style={{ marginTop: 50 }}>
                <div className={classes.mainCenter}>
                  <Typography variant="h5" component="h6" gutterBottom>
                    Education
                  </Typography>
                  <Divider className={classes.divider} />
                  {profile &&
                    profile.education.map((item, idy) => (
                      <div key={idy}>
                        <Grid container direction="row">
                          <Grid
                            item
                            xs={12}
                            sm={4}
                            md={4}
                            style={{ paddingBottom: "20px" }}
                          >
                            <Typography
                              variant="subtitle1"
                              style={{ color: "#4A4A4A" }}
                              gutterBottom
                            >
                              Degree
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              {item.degree}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={4}
                            md={4}
                            style={{ paddingBottom: "20px" }}
                          >
                            <Typography
                              variant="subtitle1"
                              style={{ color: "#4A4A4A" }}
                              gutterBottom
                            >
                              Master
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              {item.master}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={4}
                            md={4}
                            style={{ paddingBottom: "20px" }}
                          >
                            <Typography
                              variant="subtitle1"
                              style={{ color: "#4A4A4A" }}
                              gutterBottom
                            >
                              University
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              {item.university}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Divider className={classes.divider} />
                      </div>
                    ))}
                </div>
              </Paper>
              <Paper className={classes.main}>
                <div className={classes.mainCenter}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography component="h6" variant="h5" gutterBottom>
                        Review
                      </Typography>
                      <br />
                    </Grid>
                    <Grid item xs={12}>
                      {review &&
                        review
                          .filter((item) => item.id == profile.id)
                          .map((val, idx) => (
                            <div key={idx}>
                              {val.article.map((reviewer, idy) => (
                                <div key={idy}>
                                  <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    style={{ marginBottom: 50 }}
                                  >
                                    <Grid item xs={12} md={1}>
                                      <Avatar
                                        className={classes.avatar2}
                                        size="small"
                                        src={`${
                                          process.env.REACT_APP_URL
                                        }image/profile/${allUser
                                          .filter(
                                            (item) => item.id == reviewer.fromId
                                          )
                                          .map((img) => {
                                            return img.image;
                                          })
                                          .toString()}`}
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={11}>
                                      <Grid container>
                                        <Grid item xs={12}>
                                          <Grid container>
                                            <Grid item xs={12} md={8}>
                                              <Typography
                                                variant="h6"
                                                gutterBottom
                                                style={{ margin: 0 }}
                                              >
                                                {allUser
                                                  .filter(
                                                    (item) =>
                                                      item.id == reviewer.fromId
                                                  )
                                                  .map((name) => {
                                                    return (
                                                      name.firstname +
                                                      " " +
                                                      name.lastname
                                                    );
                                                  })}
                                              </Typography>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                              <Rating
                                                style={{ float: "right" }}
                                                value={reviewer.rating}
                                                readOnly
                                                size="small"
                                                precision={0.5}
                                              />
                                            </Grid>
                                          </Grid>
                                          <Typography
                                            variant="subtitle2"
                                            gutterBottom
                                            style={{
                                              margin: 0,
                                              color: "#5B5B5B",
                                            }}
                                          >
                                            {dayjs(reviewer.date).format(
                                              "DD/MM/YYYY"
                                            )}
                                          </Typography>

                                          {reviewer.like ? (
                                            <Typography
                                              variant="subtitle1"
                                              gutterBottom
                                              style={{
                                                margin: 0,
                                                color: "#1EC600",
                                              }}
                                            >
                                              <ThumbUpAltIcon
                                                size="small"
                                                style={{ fontSize: 18 }}
                                              />{" "}
                                              I recommend the consectetur
                                            </Typography>
                                          ) : (
                                            <Typography
                                              variant="subtitle1"
                                              gutterBottom
                                              style={{
                                                margin: 0,
                                                color: "#DE0000",
                                              }}
                                            >
                                              {reviewer.dislike && (
                                                <ThumbDownAltIcon
                                                  size="small"
                                                  style={{ fontSize: 18 }}
                                                />
                                              )}
                                              {reviewer.dislike &&
                                                " I not recommend the consectetur"}
                                            </Typography>
                                          )}
                                          <Typography
                                            variant="subtitle1"
                                            style={{
                                              marginTop: 15,
                                              fontSize: 14,
                                            }}
                                            gutterBottom
                                          >
                                            {reviewer.review}
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                          <Typography
                                            variant="subtitle1"
                                            style={{
                                              color: "#0093FF",
                                              fontWeight: 550,
                                              fontSize: 14,
                                              textShadow: "0.2px 0.2px",
                                              cursor: "pointer",
                                            }}
                                          >
                                            <ReplyAllIcon
                                              style={{ fontSize: 16 }}
                                            />{" "}
                                            {"  "}
                                            Reply
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={9}>
                                          <Button
                                            variant="outlined"
                                            style={{
                                              float: "right",
                                              borderColor: "#DE0000",
                                            }}
                                            size="small"
                                          >
                                            <ThumbDownAltIcon
                                              style={{
                                                fontSize: 14,
                                                color: "#DE0000",
                                                marginRight: 5,
                                              }}
                                            />{" "}
                                            {"  "} No
                                          </Button>
                                          <Button
                                            variant="outlined"
                                            style={{
                                              float: "right",
                                              borderColor: "#1EC600",
                                              marginRight: 10,
                                            }}
                                            size="small"
                                          >
                                            <ThumbUpAltIcon
                                              style={{
                                                fontSize: 14,
                                                color: "#1EC600",
                                                marginRight: 5,
                                              }}
                                            />
                                            Yes
                                          </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                          {reviewer.commend.map((com, idz) => (
                                            <div key={idz}>
                                              <Grid container>
                                                <Grid item xs={1}>
                                                  <Avatar
                                                    className={classes.avatar2}
                                                    size="small"
                                                    src={`${
                                                      process.env.REACT_APP_URL
                                                    }image/profile/${allUser
                                                      .filter(
                                                        (item) =>
                                                          item.id == com.fromId
                                                      )
                                                      .map((img) => {
                                                        return img.image;
                                                      })}`}
                                                  />
                                                </Grid>
                                                <Grid item xs={11}>
                                                  <Typography
                                                    variant="h6"
                                                    gutterBottom
                                                    style={{
                                                      marginTop: 5,
                                                      fontSize: 16,
                                                    }}
                                                  >
                                                    {allUser
                                                      .filter(
                                                        (item) =>
                                                          item.id ==
                                                          reviewer.fromId
                                                      )
                                                      .map((name) => {
                                                        return (
                                                          name.firstname +
                                                          " " +
                                                          name.lastname
                                                        );
                                                      })}
                                                    <br />
                                                    <Typography
                                                      style={{
                                                        fontSize: 12,
                                                        color: "#5B5B5B",
                                                      }}
                                                    >
                                                      {dayjs(com.date).format(
                                                        "DD/MM/YYYY"
                                                      )}
                                                    </Typography>
                                                  </Typography>
                                                  <Typography
                                                    style={{
                                                      fontSize: 12,
                                                      marginTop: 15,
                                                      color: "#5B5B5B",
                                                    }}
                                                  >
                                                    {com.recommend}
                                                  </Typography>
                                                  <Typography
                                                    variant="subtitle2"
                                                    style={{
                                                      color: "#0093FF",
                                                      fontWeight: 600,
                                                      textShadow: "0.2px 0.2px",
                                                      cursor: "pointer",
                                                    }}
                                                  >
                                                    <ReplyAllIcon
                                                      style={{
                                                        fontSize: 14,
                                                      }}
                                                    />{" "}
                                                    {"  "}
                                                    Reply
                                                  </Typography>
                                                </Grid>
                                              </Grid>
                                            </div>
                                          ))}
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </div>
                              ))}
                            </div>
                          ))}
                    </Grid>
                  </Grid>
                </div>
              </Paper>
            </Container>
          ) : (
            ""
          )}
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ViewProfile;
