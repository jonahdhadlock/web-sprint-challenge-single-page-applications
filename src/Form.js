import React, { useEffect, useState } from "react";
import * as yup from "yup";
import formSchema from "./formSchema";

function Form(props) {
  const initialForm = { name: "", email: "", password: "", checkbox: false };
  const [formValues, setFormValues] = useState(initialForm);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const submitForm = (event) => {
    event.preventDefault();
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormValues({ ...formValues, [event.target.name]: value });
  };

  function inputChange(event) {
    /* Destructuring the  name and value from the form inputs. */
    const { name, value } = event.target;
    /* 'reach' grabs requirements for the form label equal to form event in formSchema (e.g. name, email, password). 
            'validate' checks that the value/user input is valid-based on requirements in formSchema.
            'then' is what happens when successful (in this case, nothing, since there is nothing in the ()). 
            'catch' is what happens when the inputs are not valid per the formSchema (e.g. logs the message in the .required()). */
    if (name === "checkbox") {
      yup
        .reach(formSchema, name)
        .validate(event.target.checked)
        .then(() => {})
        .catch((error) => {});

      setFormValues({
        ...formValues,
        [name]: event.target.checked,
      });
    } else {
      yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => {})
        .catch((error) => {});

      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  }

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <h1 class="w3-red">Lambda Eatery</h1>
      <h2>Where Pizza Meets Pizzazz!</h2>
      <form onSubmit={submitForm}>
        <h3>Build Your Own Pizza!</h3>
        <label>Choose Your Size</label>
        <select id="size" name="size">
          <option value="Choose Size" style={{ color: "black" }}>
            Choose Your Size
          </option>
          <option value="8-inch" style={{ color: "black" }}>
            8-inch
          </option>
          <option value="10-inch" style={{ color: "black" }}>
            10-inch
          </option>
          <option value="12-inch" style={{ color: "black" }}>
            12-inch
          </option>
        </select>
        <p>Choose Your Sauce</p>
        <label id="radioList">
          Tomato
          <input type="radio" />
          Pesto
          <input type="radio" />
          White
          <input type="radio" />
        </label>
        <p>Choose Your Toppings</p>
        <label>
          Cheese
          <input name="cheese" type="checkbox" checked={false} />
          Pepperoni
          <input name="pepperoni" type="checkbox" checked={false} />
          Onion
          <input name="onion" type="checkbox" checked={false} />
        </label>
              <label>Special Requests</label>
              <textarea placeholder="I have allergies and can't enjoy pizza."></textarea>
        {/* <label>Quantity</label> */}

        <label>Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          placeholder="John Doe"
          onChange={inputChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          placeholder="johndoe@email.com"
          onChange={inputChange}
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formValues.tel}
          placeholder="(385) 123-4567"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          onChange={inputChange}
        />
        <a href="#">Terms of Service</a>
        <input
          type="checkbox"
          name="checkbox"
          value={formValues.checkbox}
          onChange={inputChange}
        />
        <button type="submit" disabled={buttonDisabled}>
          Submit Your Order!
        </button>
      </form>
    </div>
  );
}

export default Form;
