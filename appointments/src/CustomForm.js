import React from "react";

export const CustomForm = ({ firstName }) => {
  return (
    <form id="customer">
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        value={firstName}
        readOnly
      />
    </form>
  );
};
