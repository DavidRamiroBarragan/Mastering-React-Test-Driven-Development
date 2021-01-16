import React from "react";

export const CustomForm = ({ firstName }) => {
  return (
    <form id="customer">
      <input type="text" name="firstName" value={firstName} />
    </form>
  );
};
