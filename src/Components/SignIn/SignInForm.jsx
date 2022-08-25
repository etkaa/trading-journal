import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Wrapper,
  Input,
  Form,
  FormFields,
  Button,
  ErrorLabel,
} from "./SignInForm.styles";

const defaultFormFields = {
  username: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState(false);
  const { username, password } = formFields;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError(false);
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(
        "http://localhost:8000/auth/signin",
        {
          username: formFields.username,
          password: formFields.password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("SignIn Component: ", response.data);
        if (response.data.success === true) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log("this is the error from client side: ", error);
        setError(true);
      });

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
            name="username"
            value={username}
            autoFocus
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
        {error && (
          <ErrorLabel>Please check your credentials and try again!</ErrorLabel>
        )}
        <Button type="submit">Sign In</Button>
        <p> OR </p>
        <Button type="button">Continue with Google</Button>
      </Form>
      <br />
      <h3>Don't have an account?</h3>
      <h3>
        <Link to="/signup">Sign Up</Link> here.
        <br />
        <Link to="/dashboard">Dashboard</Link> here.
      </h3>
    </Wrapper>
  );
};

export default SignInForm;
