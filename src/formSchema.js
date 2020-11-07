import * as yup from "yup";

let formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  email: yup.string().required("Email is a required field.").email(),
  phone: yup.string().required("Please enter your phone number"),
  checkbox: yup
    .boolean()
    .oneOf([true], "You obviously need to read the Terms!"),
  radio: yup.boolean().oneOf([true], "Sauce is a required field."),
  textarea: yup.string(),
});

export default formSchema;
