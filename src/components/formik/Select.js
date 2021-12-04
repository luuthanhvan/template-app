import React from "react";
import TextError from "./TextError";
import { Field, ErrorMessage } from "formik";

function Select({ label, name, options, ...rest }) {
  return (
    <div>
      <label className="form-label" htmlFor={name}>{label}</label>
      <Field
        as="select"
        className="form-control"
        id={name}
        name={name}
        {...rest}
      >
        <option>Chọn {label.toLowerCase()}</option>
        {options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </Field>
      <ErrorMessage component={TextError} name="name" />
    </div>
  );
}

export default Select;
