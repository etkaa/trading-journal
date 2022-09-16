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
  SignUpBody,
} from "./SignUpForm.styles";

const defaultFormFields = {
  name: "",
  username: "",
  password: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState(null);
  const { name, username, password } = formFields;
  const { setCurrentUserID, setIsAuthenticated } = useContext(UserContext);
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
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        {
          fullName: formFields.name,
          username: formFields.username,
          password: formFields.password,
          auth_method: "local",
        },
        {
          withCredentials: true,
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("response.data = ", response.data);
        if (response.status === 200) {
          setCurrentUserID(response.data.userID);
          setIsAuthenticated(true);
          setFormFields(defaultFormFields);
          navigate("/dashboard", { replace: true });
        }
      })
      .catch((error) => {
        setError(true);
        console.log("this is signupform catch error", error);
      });
  };

  return (
    <SignUpBody>
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
          {error && (
            <ErrorLabel>User already exists, please sign in.</ErrorLabel>
          )}
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
    </SignUpBody>
  );
};

export default SignUpForm;
