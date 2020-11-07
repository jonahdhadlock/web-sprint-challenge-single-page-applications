import * as yup from 'yup';

let formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  email: yup.string().required("Email is a required field.").email(),
  tel: yup.string().required("Please enter your phone number"),
  checkbox: yup.boolean().oneOf([true], "You obviously need to read the Terms!")
});

export default formSchema;