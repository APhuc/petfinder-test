import * as yup from "yup";

export const registerSchema = yup.object().shape({
  Key: yup
    .string("Key should be a string")
    .trim("Key cannot include leading and trailing spaces")
    .strict(true)
    .required("Key is required"),
  Password: yup
    .string("Password should be a string")
    .trim("Space is not required")
    .strict(true)
    .required("Password is required"),
});
