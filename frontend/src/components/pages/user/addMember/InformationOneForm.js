import React, { Fragment, useEffect } from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import TextFieldTheme from "../../shared/general/TextFieldTheme";
import { Controller } from "react-hook-form";

import Utils from "../../../../utils";

const InformationOne = (props) => {
  const {
    formProps: {
      control,
      getValues,
      setValue,
      formState: { errors },
    },
  } = props;
  const { experience } = props.fetchData;

  const jobType = [
    "งานเต็มเวลา",
    "งานนอกเวลา",
    "งานอิสระ",
    "งานสัญญาจ้าง",
    "นักศึกษาฝึกงาน",
  ];

  const { inputNumberWithCommas } = Utils;

  const onCheckedHandler = (type) => {
    const currentJobType = getValues("jobType");
    if (!currentJobType.includes(type)) {
      setValue("jobType", [...currentJobType, type]);
      return;
    }
    const newTypes = currentJobType.filter((item) => item !== type);
    setValue("jobType", newTypes);
  };

  useEffect(() => {
    const duration = experience.map((obj) => obj.duration);
    let count = 0;
    duration.forEach((obj) => {
      if (obj !== -1) count += obj;
    });
    setValue("yearOfExperience", count);
  }, [experience]);

  return (
    <Fragment>
      <Grid className="margin-Bottom" container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            id="jobLevel"
            name="jobLevel"
            render={({ field }) => (
              <TextFieldTheme
                {...field}
                label="ระดับตำแหน่ง"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                select
              >
                <MenuItem value={`Junior`}>Junior</MenuItem>
                <MenuItem value={"Senior"}>Senior</MenuItem>
                <MenuItem value={`Manager`}>Manager</MenuItem>
                <MenuItem value={`Director`}>Director</MenuItem>
                <MenuItem value={`C-Level`}>C-Level</MenuItem>
              </TextFieldTheme>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            id="yearOfExperience"
            name="yearOfExperience"
            render={({ field }) => (
              <TextFieldTheme
                {...field}
                label="อายุงาน"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                select
              >
                <MenuItem value={0}>น้อยกว่า 1 ปี</MenuItem>
                <MenuItem value={1}>1 ปี</MenuItem>
                <MenuItem value={2}>2 ปี</MenuItem>
                <MenuItem value={3}>3 ปี</MenuItem>
                <MenuItem value={4}>4 ปี</MenuItem>
                <MenuItem value={5}>5 ปี</MenuItem>
                <MenuItem value={6}>6 ปี</MenuItem>
                <MenuItem value={7}>7 ปี</MenuItem>
                <MenuItem value={8}>8 ปี</MenuItem>
                <MenuItem value={9}>มากกว่า 9 ปี</MenuItem>
              </TextFieldTheme>
            )}
          />
        </Grid>
      </Grid>

      <Typography gutterBottom style={{ color: "#9e9e9e" }}>
        ประเภทการจ้างงาน
      </Typography>
      <Grid className="margin-Bottom" container spacing={1}>
        <Controller
          name="jobType"
          control={control}
          render={(field) => (
            <>
              {jobType.map((type, index) => (
                <Grid key={`type_${index}`} item xs={6} sm={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={() => {
                          onCheckedHandler(type);
                        }}
                        checked={getValues("jobType").includes(type)}
                      />
                    }
                    label={type}
                  />
                </Grid>
              ))}
            </>
          )}
        />
      </Grid>

      <div className="margin-Bottom">
        <Controller
          control={control}
          id="expectedSalary"
          name="expectedSalary"
          render={({ field }) => (
            <TextFieldTheme
              {...field}
              label="เงินเดือนที่คาดหวัง (บาท)"
              onChange={(e) =>
                field.onChange(
                  inputNumberWithCommas(
                    e.target.value,
                    e.target.defaultValue,
                    0
                  )
                )
              }
              fullWidth
              style={{ maxWidth: 300 }}
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          id="currentSalary"
          name="currentSalary"
          render={({ field }) => (
            <TextFieldTheme
              {...field}
              label="เงินเดือนปัจจุบัน (บาท)"
              onChange={(e) =>
                field.onChange(
                  inputNumberWithCommas(
                    e.target.value,
                    e.target.defaultValue,
                    0
                  )
                )
              }
              fullWidth
              style={{ maxWidth: 300 }}
            />
          )}
        />
      </div>
    </Fragment>
  );
};

export default InformationOne;
