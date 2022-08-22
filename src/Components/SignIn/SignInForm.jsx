import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Input, Form, FormFields, Button } from "./SignInForm.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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
      <h2>Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <FormFields>
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
        <Button type="submit">Sign In</Button>
        <p> OR </p>
        <Button type="submit">Continue with Google</Button>
      </Form>
      <br />
      <h3>Don't have an account?</h3>
      <h3>
        <Link to="/signup">Sign Up</Link> here.
        <Link to="/dashboard">Dashboard</Link> here.
      </h3>
    </Wrapper>
  );
};

export default SignInForm;
