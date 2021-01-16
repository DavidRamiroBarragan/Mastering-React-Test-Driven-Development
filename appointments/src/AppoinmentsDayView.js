import React, { useState } from "react";

const appointmentTimeOfDay = (starAt) => {
  const [h, m] = new Date(starAt).toTimeString().split(":");
  return `${h}:${m}`;
};
export const Appointment = ({
  customer,
  stylist,
  service,
  notes,
  startsAt,
}) => (
  <div id="appointmentView">
    <h3>Today’s appointment at: {appointmentTimeOfDay(startsAt)}</h3>
    <table>
      <tbody>
        <tr>
          <td>Customer</td>
          <td>
            <p>
              {customer.firstName} {customer.lastName}
            </p>
          </td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>{customer.phoneNumber}</td>
        </tr>
        <tr>
          <td>Stylist</td>
          <td>{stylist}</td>
        </tr>
        <tr>
          <td>Service</td>
          <td>{service}</td>
        </tr>
        <tr>Notes</tr>
        <tr>{notes}</tr>
      </tbody>
    </table>
  </div>
);

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);

  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button
              className={i === selectedAppointment ? "toggled" : ""}
              type="button"
              onClick={() => setSelectedAppointment(i)}
            >
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
    </div>
  );
};
