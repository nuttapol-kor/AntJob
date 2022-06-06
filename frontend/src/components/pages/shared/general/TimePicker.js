import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function TimePicker(props) {
  const { value, unit, name, disabled, handleChangeTime, periodTime } = props;
  //const [value, setValue] = React.useState("");
  const [HOURS] = React.useState(24);
  const [MINUTE] = React.useState(60);

  const handleChange = (event) => {
    //setValue(event.target.value);
    handleChangeTime(name, unit, periodTime, event.target.value);
  };

  return (
    <FormControl fullWidth disabled={disabled}>
      <InputLabel id="demo-simple-select-label">
        {unit === "hour" ? "ชั่วโมง" : "นาที"}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={unit === "hour" ? "ชั่วโมง" : "นาที"}
        value={value}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300,
            },
          },
        }}
      >
        {[...Array(unit === "hour" ? HOURS : MINUTE).keys()].map((value) => {
            return <MenuItem key={value} value={value}>{value}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
}
