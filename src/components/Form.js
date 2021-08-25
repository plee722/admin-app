import React from "react";
import { Input } from "../componentStyles";

const Form = ({ id, type, handleFormChange }) => {
  return (
    <form>
      <label htmlFor="id">Enter {type} ID</label>
      <br></br>
      <Input type="text" name="id" value={id} onChange={handleFormChange} />
    </form>
  );
};

export default Form;
