import React from "react";
import TextError from "./TextError";
import { Field, ErrorMessage } from "formik";

function FilePicker({ label, name, ...rest }) {
  return (
    <div>
      <label className="form-label" htmlFor={name}>{label}</label>
      <Field
        className="form-control"
        as="file"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default FilePicker;
