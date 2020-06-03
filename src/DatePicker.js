import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  width: {
    width: "100%",
    marginBottom: "1rem",
  },
});

const MUIDatePicker = (props) => {
  const [selectedDate, handleDateChange] = useState(new Date(null));
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        clearable
        label={props.label}
        placeholder="10/10/2020"
        value={selectedDate}
        onChange={handleDateChange}
        format="dd/MM/yyyy"
        views={["year", "month", "date"]}
        className={classes.width}
        inputVariant="outlined"
      />
    </MuiPickersUtilsProvider>
  );
};

export default MUIDatePicker;
