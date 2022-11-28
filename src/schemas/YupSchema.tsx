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
export const merchSchema = yup.object().shape({
  description: yup
    .string()
    .max(50)
    .required("Description Required!"),
  quantity: yup
    .number()
    .min(0)
    .required("Quantity Required!"),
  price: yup
    .number()
    .min(0)
    .required("Price Required!"),
  category: yup
    .string().required("Category Required!")
})
export const petSchema = yup.object().shape({
  name: yup
    .string()
    .max(50)
    .required("Name Required!"),
  breed: yup
    .string()
    .max(10)
    .required("Breed Required!"),
  price: yup
    .number()
    .min(0)
    .required("Price Required!"),
  category: yup
    .string().required("Category Required!"),
  gender: yup
    .string().max(10).required("Gender Required!")
})
