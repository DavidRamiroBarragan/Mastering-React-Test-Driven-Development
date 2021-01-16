import React from "react";
import ReactDoM from "react-dom";
import { AppointmentsDayView } from "./AppoinmentsDayView";
import { sampleAppointments } from "./sampleData";

ReactDoM.render(
  <AppointmentsDayView appoinments={sampleAppointments} />,
  document.getElementById("root")
);
