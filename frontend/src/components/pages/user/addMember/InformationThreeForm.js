import React, { Fragment, useEffect } from "react";
import {
  Button,
  Stack,
  Typography,
  MenuItem,
  IconButton,
  styled,
} from "@mui/material";
import { Controller, useFieldArray } from "react-hook-form";
import TextFieldTheme from "../../shared/general/TextFieldTheme";

const StyledExperience = styled("div")({
  marginTop: 20,
  display: "grid",
  gridTemplateColumns: "calc(100% - 220px) 180px auto",
  // gridGap: "0 8px",
  alignItems: "center",
});

const InformationThree = (props) => {
  const {
    formProps: {
      register,
      control,
      getValues,
      setValue,
      formState: { errors },
      watch,
    },
  } = props;
  const {
    fields: jobExperienceFields,
    append: jobExperienceAppend,
    remove: jobExperienceRemove,
    replace: jobExperienceReplace,
  } = useFieldArray({ control, name: "jobExperience" });
  const {
    fields: educationFields,
    append: educationAppend,
    remove: educationRemove,
    replace: educationReplace,
  } = useFieldArray({ control, name: "education" });
  const { experience, education } = props.fetchData;

  useEffect(() => {
    jobExperienceReplace([]);
    educationReplace([]);
    experience.forEach((val) => {
      jobExperienceAppend({ experience: val.detail, year: val.duration });
    });
    education.forEach((val) => {
      console.log({ detail: val.detail, year: val.year });
      educationAppend({ detail: val.detail, year: val.duration });
    });
  }, [experience, education]);
  return (
    <Fragment>
      <div>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography gutterBottom style={{ color: "#9e9e9e" }}>
            ประสบการณ์ทำงาน
          </Typography>
          <Button
            className="btn-addExperience"
            startIcon={<i className="fa-solid fa-plus"></i>}
            variant="outlined"
            style={{ paddingLeft: 32, paddingRight: 32 }}
            onClick={() => {
              jobExperienceAppend({ experience: "", year: "" });
            }}
          >
            เพิ่มประสบการณ์
          </Button>
        </Stack>
        {jobExperienceFields.map((item, index) => (
          <StyledExperience key={item.id}>
            <Controller
              control={control}
              id={`jobExperience.${index}.experience`}
              name={`jobExperience.${index}.experience`}
              render={({ field }) => (
                <TextFieldTheme {...field} placeholder="ชื่อประสบการณ์" />
              )}
            />
            <Controller
              control={control}
              id={`jobExperience.${index}.year`}
              name={`jobExperience.${index}.year`}
              render={({ field }) => (
                <TextFieldTheme {...field} placeholder="ปี" select>
                  <MenuItem value={-1}>ไม่ทราบ</MenuItem>
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
            <IconButton
              style={{ width: 40, height: 40 }}
              onClick={() => {
                jobExperienceRemove(index);
              }}
            >
              <i className="fa-solid fa-trash-can"></i>
            </IconButton>
          </StyledExperience>
        ))}
      </div>

      <div style={{ marginTop: 48 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography gutterBottom style={{ color: "#9e9e9e" }}>
            ประวัติการศึกษา
          </Typography>
          <Button
            className="btn-addEducation"
            startIcon={<i className="fa-solid fa-plus"></i>}
            variant="outlined"
            style={{ paddingLeft: 32, paddingRight: 32 }}
            onClick={() => {
              educationAppend({ detail: "", year: "" });
            }}
          >
            เพิ่มประวัติ
          </Button>
        </Stack>
        {educationFields.map((item, index) => (
          <StyledExperience key={item.id}>
            <Controller
              control={control}
              id={`education.${index}.detail`}
              name={`education.${index}.detail`}
              render={({ field }) => (
                <TextFieldTheme {...field} placeholder="รายละเอียด" />
              )}
            />
            <Controller
              control={control}
              id={`education.${index}.year`}
              name={`education.${index}.year`}
              render={({ field }) => (
                <TextFieldTheme {...field} placeholder="ปี" select>
                  <MenuItem value={-1}>ไม่ทราบ</MenuItem>
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
            <IconButton
              style={{ width: 40, height: 40 }}
              onClick={() => {
                educationRemove(index);
              }}
            >
              <i className="fa-solid fa-trash-can"></i>
            </IconButton>
          </StyledExperience>
        ))}
      </div>
    </Fragment>
  );
};

export default InformationThree;
