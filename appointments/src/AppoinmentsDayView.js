import React, { useState } from "react";

const appointmentTimeOfDay = (starAt) => {
  const [h, m] = new Date(starAt).toTimeString().split(":");
  return `${h}:${m}`;
};
export const Appointment = ({
  customer: { firstName, phoneNumber, stylist, service, notes, startAt },
}) => (
  <>
    <h1>Today's appointment at: {startAt}</h1>
    <div>{firstName}</div>
    <div>{phoneNumber}</div>
    <div>{stylist}</div>
    <div>{service}</div>
    <div>{notes}</div>
  </>
);

export const AppointmentsDayView = ({ appoinments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  return (
    <div id="appoinmentsDayView">
      <ol>
        {appoinments.map((appoinment, i) => (
          <li key={appoinment.startAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(appoinment.startAt)}
            </button>
          </li>
        ))}
      </ol>
      {appoinments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appoinments[selectedAppointment]} />
      )}
    </div>
  );
};
