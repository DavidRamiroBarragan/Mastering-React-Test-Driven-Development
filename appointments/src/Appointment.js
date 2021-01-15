import React from "react";

const appointmentTimeOfDay = (starAt) => {
  const [h, m] = new Date(starAt).toTimeString().split(":");
  return `${h}:${m}`;
};
export const Appointment = ({ customer: { firstName } }) => (
  <div>{firstName}</div>
);

export const AppointmentsDayView = ({ appoinments }) => (
  <div id="appoinmentsDayView">
    <ol>
      {appoinments.map((appoinment) => (
        <li key={appoinment.startAt}>
          {appointmentTimeOfDay(appoinment.startAt)}
        </li>
      ))}
    </ol>
    {appoinments.length === 0 ? (
      <p>There are no appointments scheduled for today.</p>
    ) : (
      <Appointment {...appoinments[0]} />
    )}
  </div>
);
