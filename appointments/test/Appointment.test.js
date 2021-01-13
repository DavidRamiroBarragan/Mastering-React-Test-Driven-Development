import React from "react";
import ReactDoM from "react-dom";
import { Appointment } from "../src/Appointment";
describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };
    const container = document.createElement("div");
    ReactDoM.render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch("Ashley");
  });
  it("renders the customer first name", () => {
    const customer = { firstName: "Jordan" };
    const container = document.createElement("div");
    ReactDoM.render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch("Jordan");
  });
});
