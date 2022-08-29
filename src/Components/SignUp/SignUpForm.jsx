import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/User.Context";
import {
  Wrapper,
  Input,
  Form,
  FormFields,
  Button,
  ErrorLabel,
} from "./SignUpForm.styles";

const defaultFormFields = {
  name: "",
  username: "",
  password: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState(null);
  const { name, username, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(
        "http://localhost:8000/auth/signup",
        {
          fullName: formFields.name,
          username: formFields.username,
          password: formFields.password,
          auth_method: "local",
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("response.data:", response.data);
        if (response.data.success === true) {
          setCurrentUser(response.data.user);
          navigate("/dashboard");
        } else {
          setErrorMessage(response.data.message);
        }
      })
      .catch((error) => {
        console.log("this is signupform catch error", error);
      });

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
            autoFocus
            required
          />
          <label>Email</label>
          <Input
            type="email"
            onChange={handleChange}
            name="username"
            value={username}
            required
          />
          <label>Password</label>
          <Input
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
            minLength="8"
            required
          />
        </FormFields>
        {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
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
