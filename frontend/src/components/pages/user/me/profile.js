import { Grid } from "@mui/material";
import React from "react";
import TextFieldTheme from "../../shared/general/TextFieldTheme";

const ProfileTab = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextFieldTheme name="about" label="เกี่ยวกับบริษัท" multiline={true} rows={4} />
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextFieldTheme name="capital" label="ทุนจดทะเบียน" fullwidth />
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextFieldTheme name="capital" label="ปีที่จดทะเบียน" fullwidth />
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextFieldTheme name="capital" label="รายได้ (ปีล่าสุด)" fullwidth />
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextFieldTheme name="capital" label="จำนวน Manpower" fullwidth />
      </Grid>
    </Grid>
  );
};

export default ProfileTab;
