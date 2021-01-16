import React from "react";
import { createContainer } from "./domManipulators";
import { CustomForm } from "../src/CustomForm";

describe("CustomForm", () => {
  let render, container;

  const form = (id) => container.querySelector(`form[id="${id}"]`);

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  it("renders a form", () => {
    render(<CustomForm />);
    expect(form("customer")).not.toBeNull();
  });

  it("renders the first name field as a text box", () => {
    render(<CustomForm />);
    const field = form("customer").elements.firstName;
    expect(field).not.toBeNull();
    expect(field.tagName).toEqual("INPUT");
    expect(field.type).toEqual("text");
  });
});
