import React from "react";
import ReactDoM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import { Appointment, AppointmentsDayView } from "../src/Appointment";

let customer;
let container;
const render = (component) => ReactDoM.render(component, container);
describe("Appointment", () => {
  beforeEach(() => {
    container = document.createElement("div");
  });

  it("renders the customer first name", () => {
    customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch("Ashley");
  });
  it("renders the customer first name", () => {
    customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch("Jordan");
  });
});

describe("AppoinmentsDayView", () => {
  beforeEach(() => {
    container = document.createElement("div");
  });

  const today = new Date();
  const appointments = [
    {
      startAt: today.setHours(12, 0),
      customer: { firstName: "Ashley" },
    },
    {
      startAt: today.setHours(13, 0),
      customer: { firstName: "Jordan" },
    },
  ];

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appoinments={[]} />, container);
    expect(container.querySelector("div#appoinmentsDayView")).not.toBeNull();
  });

  it("renders multiple appoinments in an ol element", () => {
    render(<AppointmentsDayView appoinments={appointments} />);
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });

  it("renders each appoinment in a li", () => {
    render(<AppointmentsDayView appoinments={appointments} />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(container.querySelectorAll("li")[0].textContent).toEqual("12:00");
    expect(container.querySelectorAll("li")[1].textContent).toEqual("13:00");
  });

  it("initially shows a message saying there are no appontments today", () => {
    render(<AppointmentsDayView appoinments={[]} />);
    expect(container.textContent).toMatch(
      "There are no appointments scheduled for today."
    );
  });

  it("selects the first appontment by default", () => {
    render(<AppointmentsDayView appoinments={appointments} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("has a button element in each li", () => {
    render(<AppointmentsDayView appoinments={appointments} />);
    expect(container.querySelectorAll("li > button")).toHaveLength(2);
    expect(container.querySelectorAll("li > button")[0].type).toEqual("button");
  });
  it("renders another appointment when selected", () => {
    render(<AppointmentsDayView appoinments={appointments} />);
    const button = container.querySelectorAll("button")[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch("Jordan");
  });
});
