import { Grid, Typography, Icon } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextFieldTheme from "../../shared/general/TextFieldTheme";

const ProfileTab = () => {
  const { result: userProfile } = useSelector((state) => state.userProfile);
  const dataList = [
    {
      data: userProfile?.capital,
      label: "ทุนจดทะเบียน",
      icon: <i className="fa-thin fa-sack-dollar"></i>,
    },
    {
      data: userProfile?.yearStart,
      label: "ปีที่จดทะเบียน",
      icon: <i className="fa-thin fa-calendar-lines-pen"></i>,
    },
    {
      data: userProfile?.incomeLastYear,
      label: "รายได้ (ปีล่าสุด)",
      icon: <i className="fa-thin fa-face-tongue-money"></i>,
    },
    {
      data: userProfile?.manPowerSize,
      label: "จำนวน manpower",
      icon: <i className="fa-thin fa-people-group"></i>,
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          gutterBottom
          style={{ fontWeight: 600, marginBottom: 16 }}
        >
          เกี่ยวกับบริษัท
        </Typography>
        {/* <TextFieldTheme name="about" label="เกี่ยวกับบริษัท" multiline={true} rows={4} value={userProfile.description} /> */}
        <Typography variant="body1">{userProfile?.description}</Typography>
      </Grid>
      {dataList.map((value) => (
        <Grid item xs={12} sm={6}>
          {/* <TextFieldTheme name="capital" label="ทุนจดทะเบียน" fullwidth /> */}
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item>{value.icon}</Grid>
            <Grid item>
              <Grid container direction={"column"}>
                <Grid item>{value.data}</Grid>
                <Grid item>
                  <Typography variant="caption" color={"gray"}>{value.label}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
      {/* <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item>
            <i class="fa-thin fa-landmark-flag"></i>
            </Grid>
            <Grid item>
              <Grid container direction={"column"}>
                <Grid item>
                {userProfile.capital}
                </Grid>
                <Grid item>
                  <Typography variant="caption">
                  ทุนจดทะเบียน
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextFieldTheme name="capital" label="ปีที่จดทะเบียน" fullwidth />
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextFieldTheme name="capital" label="รายได้ (ปีล่าสุด)" fullwidth />
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextFieldTheme name="capital" label="จำนวน Manpower" fullwidth />
      </Grid> */}
    </Grid>
  );
};

export default ProfileTab;
