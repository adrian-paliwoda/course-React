import {
    hasMinLength,
    isEmail,
    isEqualToOtherValue,
    isNotEmpty,
  } from "../util/validation";

export default function signupAction(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const role = formData.get("role");
    const terms = formData.get("terms");
    const acquisitionChannel = formData.getAll("acquisition");

    let errors = [];

    if (!isEmail(email)) {
      errors.push("Invalid email address");
    }

    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
      errors.push("You must provice a password with at least 6 characters");
    }
    if (!isEqualToOtherValue(password, confirmPassword)) {
      errors.push("Passwords do not match.");
    }

    if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
      errors.push("Please provide both your last and first name.");
    }

    if (!isNotEmpty(role)) {
      errors.push("Please select a role");
    }

    if (!terms) {
      errors.push("You must agree to the terms");
    }

    if (acquisitionChannel.length === 0) {
      errors.push("Please check at least one accusition channel");
    }

    if (errors.length > 0) {
      return {
        enteredValues: {
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
          role,
          terms,
          acquisitionChannel,
        },
        errors: errors
      };
    }

    return {
       errors: null };
  }