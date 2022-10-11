import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email!")
    .required("Email required!"),
  firstName: yup.string().max(20).required("First name required!"),
  lastName: yup.string().max(20).required("Last name required!"),
  hours: yup
    .string()
    .required("We need to know how much time you can spend with your new pet!"),
  homeSize: yup
    .string()
    .required("We need to know you have adequate space for your new pet!"),
  about: yup.string().max(500).required("Dont be shy tell us about yourself!"),
});
