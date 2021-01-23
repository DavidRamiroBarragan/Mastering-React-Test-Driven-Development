import React from "react";
import { createContainer } from "./domManipulators";
import { CustomForm } from "../src/CustomForm";

describe("CustomForm", () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });
  const form = (id) => container.querySelector(`form[id="${id}"]`);
  const firstNameField = () => form("customer").elements.firstName;

  const expectToBeInputField = (formElement, type = "text") => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual("INPUT");
    expect(formElement.type).toEqual(type);
  };
  const expectToBeInputFieldTypeTExt = (formElement) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual("INPUT");
    expect(formElement.type).toEqual("text");
  };
  const labelFor = (formElement) =>
    container.querySelector(`label[for="${formElement}"]`);

  it("renders a form", () => {
    render(<CustomForm />);
    expect(form("customer")).not.toBeNull();
  });

  it("renders the first name field as a text box", () => {
    render(<CustomForm />);
    expectToBeInputField(firstNameField());
    expectToBeInputFieldTypeTExt(firstNameField());
  });

  it("includes the existing value in the firstName", () => {
    render(<CustomForm firstName={"Ashley"} />);
    expect(firstNameField().value).toEqual("Ashley");
  });

  it("renders a label for the first name field", () => {
    render(<CustomForm />);
    expect(labelFor("firstName").textContent).toEqual("First Name");
  });

  it("assigns an id that matches the label id to the first name field", () => {
    render(<CustomForm />);
    expect(firstNameField().id).toEqual("firstName");
  });
});
