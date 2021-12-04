import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function CheckBox({ label, name, ...rest }) {
  return (
    <div>
      <Field className="form-control" name={name}>
        {({ field }) => {
          return (
            <div className="form-check checkbox-field">
              <input
                className="form-check-input"
                id={name}
                type="checkbox"
                {...field}
                {...rest}
              />
              <label className="form-check-label" htmlFor={name}>{label}</label>
            </div>
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default CheckBox;
