import React from "react";
import { createContainer } from "./domManipulators";
import { CustomForm } from "../src/CustomForm";

describe("CustomForm", () => {
  let render, container;

  const form = (id) => container.querySelector(`form[id="${id}"]`);
  const expectToBeInputField = (formElement, type = "text") => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual("INPUT");
    expect(formElement.type).toEqual(type);
  };

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
    expectToBeInputField(field);
  });
  it("includes the existing value in the firstName", () => {
    render(<CustomForm firstName={"Ashley"} />);
    const field = form("customer").elements.firstName;
    expect(field.value).toEqual("Ashley");
  });
});
