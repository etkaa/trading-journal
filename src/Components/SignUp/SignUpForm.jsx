import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Input, Form, FormFields, Button } from "./SignUpForm.styles";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
    setFormFields(defaultFormFields);
  };

  return (
    <Wrapper>
      <h2>Create Account</h2>
      <Form onSubmit={handleSubmit}>
        <FormFields>
          <label>Name</label>
          <Input
            type="text"
            onChange={handleChange}
            name="name"
            value={name}
            required
          />
          <label>Email</label>
          <Input
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          />
          <label>Password</label>
          <Input
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
            required
          />
        </FormFields>
        <Button type="submit">Sign Up</Button>
        <p> OR </p>
        <Button type="submit">Continue with Google</Button>
      </Form>
      <br />
      <h3>Already have an account?</h3>
      <h3>
        <Link to="/signin">Sign In</Link> here.
      </h3>
    </Wrapper>
  );
};

export default SignUpForm;
