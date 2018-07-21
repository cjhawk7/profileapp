const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
