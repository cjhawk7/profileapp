import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const Fields = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return ( <div className="form-group">
  <input
    type="email"
    className={
      errors.email
        ? "form-control form-control-lg is-invalid"
        : "form-control form-control-lg"
    }
    placeholder="Email Address"
    name="email"
    value={this.state.email}
    onChange={this.onChange.bind(this)}
  />
  {errors.email && (
    <div className="invalid-feedback">{errors.email}</div>
  )}
  );
</div>;
};

export default Fields;
