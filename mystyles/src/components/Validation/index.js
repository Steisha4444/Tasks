import { useState } from "react";
import { omit } from "lodash";

export const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    switch (name) {
      case "organization":
        if (value.length <= 1) {
          setErrors({
            ...errors,
            organization: "Organization name should contain at least 2 letters",
          });
        } else {
          let newObj = omit(errors, "organization");
          setErrors(newObj);
        }
        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "phone":
        if (
          !new RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g).test(
            value
          )
        ) {
          setErrors({
            ...errors,
            phone: "Invalid phone number",
          });
        } else {
          let newObj = omit(errors, "phone");
          setErrors(newObj);
        }
        break;

      case "messageText":
        if (value.length <= 1) {
          setErrors({
            ...errors,
            messageText: "Organization name should contain at least 2 letters",
          });
        } else {
          let newObj = omit(errors, "messageText");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("Error occured while sending message, try again!");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};