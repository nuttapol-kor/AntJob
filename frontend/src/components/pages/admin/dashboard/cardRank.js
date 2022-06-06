import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

import StyledCard from "../../shared/general/CardCharts";
import { Typography } from "@mui/material";

const StyledAvatar = styled(Avatar)({
  width: 50,
  height: 50,
  marginRight: 12,
});

const StyledStack = styled(Stack)({
  padding: 24,
  justifyContent: "space-between",
});

const StyledWrapPerson = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  "& .left": {
    display: "flex",
    alignItems: "center",
  },
  "& .right": {
    display: "flex",
    alignItems: "baseline",
    "& .MuiTypography-h4": {
      marginRight: 4,
    },
  },
});

export default function CardRankOTOver36(props) {
  const { name, unit } = props;
  return (
    <StyledCard>
      <CardContent style={{ paddingBottom: 0 }}>
        <div>
          <Typography variant="h4" className={`cardTitle`} gutterBottom>
            {name}
          </Typography>
          <StyledStack
            direction="column"
            divider={<Divider flexItem style={{ borderColor: "#b5b5b533" }} />}
            spacing={2}
          >
            <StyledWrapPerson>
              <div className={`left`}>
                <StyledAvatar
                  alt={"username"}
                  src={`${process.env.REACT_APP_API_URL}image/profile/1.jpg`}
                />
                <div>
                  <Typography variant="h6">Dina Villalobos</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontStyle: "oblique" }}
                  >
                    Position
                  </Typography>
                </div>
              </div>
              <div className={`right`}>
                <Typography variant="h4">46</Typography>
                <Typography variant="body2">{unit}</Typography>
              </div>
            </StyledWrapPerson>
            <StyledWrapPerson>
              <div className={`left`}>
                <StyledAvatar
                  alt={"username"}
                  src={`${process.env.REACT_APP_API_URL}image/profile/2.jpg`}
                />
                <div>
                  <Typography variant="h6">Nisha Schmidt</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontStyle: "oblique" }}
                  >
                    {" "}
                    Position
                  </Typography>
                </div>
              </div>
              <div className={`right`}>
                <Typography variant="h4">46</Typography>
                <Typography variant="body2">{unit}</Typography>
              </div>
            </StyledWrapPerson>
            <StyledWrapPerson>
              <div className={`left`}>
                <StyledAvatar
                  alt={"username"}
                  src={`${process.env.REACT_APP_API_URL}image/profile/3.jpg`}
                />
                <div>
                  <Typography variant="h6">Ronald Caldwell</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontStyle: "oblique" }}
                  >
                    {" "}
                    Position
                  </Typography>
                </div>
              </div>
              <div className={`right`}>
                <Typography variant="h4">46</Typography>
                <Typography variant="body2">{unit}</Typography>
              </div>
            </StyledWrapPerson>
            <StyledWrapPerson>
              <div className={`left`}>
                <StyledAvatar
                  alt={"username"}
                  src={`${process.env.REACT_APP_API_URL}image/profile/4.jpg`}
                />
                <div>
                  <Typography variant="h6">Nisha Schmidt</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontStyle: "oblique" }}
                  >
                    {" "}
                    Position
                  </Typography>
                </div>
              </div>
              <div className={`right`}>
                <Typography variant="h4">46</Typography>
                <Typography variant="body2">{unit}</Typography>
              </div>
            </StyledWrapPerson>
            <StyledWrapPerson>
              <div className={`left`}>
                <StyledAvatar
                  alt={"username"}
                  src={`${process.env.REACT_APP_API_URL}image/profile/5.jpg`}
                />
                <div>
                  <Typography variant="h6">Ronald Caldwell</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontStyle: "oblique" }}
                  >
                    {" "}
                    Position
                  </Typography>
                </div>
              </div>
              <div className={`right`}>
                <Typography variant="h4">46</Typography>
                <Typography variant="body2">{unit}</Typography>
              </div>
            </StyledWrapPerson>
          </StyledStack>
        </div>
      </CardContent>
    </StyledCard>
  );
}
