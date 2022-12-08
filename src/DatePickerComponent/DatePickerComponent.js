import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = (props) => {
  
  return (
    <DatePicker selected={props.selectedDate} onChange={(date)=>props.handleDateChange(date)}/>
  );
};

export default DatePickerComponent;