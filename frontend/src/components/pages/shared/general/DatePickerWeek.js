import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DatePicker from "@mui/lab/DatePicker";
import PickersDay from "@mui/lab/PickersDay";
import endOfWeek from "date-fns/endOfWeek";
import isSameDay from "date-fns/isSameDay";
import isWithinInterval from "date-fns/isWithinInterval";
import startOfWeek from "date-fns/startOfWeek";
import format from 'date-fns/format'


const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay"
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark
    }
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%"
  }),
  ...(isLastDay && {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%"
  })
}));

export default function DatePickerWeek() {
  const [value, setValue] = React.useState(new Date());

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = startOfWeek(value);
    const end = endOfWeek(value);

    const dayIsBetween = isWithinInterval(date, { start, end });
    const isFirstDay = isSameDay(date, start);
    const isLastDay = isSameDay(date, end);

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  const inputFormat = () => {
    const start = startOfWeek(value);
    const end = endOfWeek(value);
    console.log(start)
    console.log(end)
    //return start
    return `${format(start, 'dd MMM yyyy')} - ${format(end, 'dd MMM yyyy')}`
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Week picker"
        value={value}
        onChange={(newValue) => {
          console.log(newValue)
          setValue(newValue);
        }}
        renderDay={renderWeekPickerDay}
        renderInput={({ inputRef, inputProps, InputProps }) => (
            <TextField
                style={{ width: "100%" }}
              id="outlined-read-only-input"
              label=""
              ref={inputRef} {...inputProps}
              value={inputFormat()}
              InputProps={InputProps}
              readOnly
            />
        )}
      />
    </LocalizationProvider>
  );
}
