import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Wrapper,
  Input,
  Form,
  FormFields,
  Button,
  ErrorLabel,
  SignInBody,
} from "./SignInForm.styles";
import { UserContext } from "../../Context/User.Context";

const defaultFormFields = {
  username: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState(false);
  const { username, password } = formFields;
  const { setCurrentUserID, setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError(false);
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/signin`,
        {
          username: formFields.username,
          password: formFields.password,
        },
        {
          withCredentials: true,
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setCurrentUserID(response.data.userID);
          setIsAuthenticated(true);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });

    setFormFields(defaultFormFields);
  };

  return (
    <SignInBody>
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
            <ErrorLabel>
              Please check your credentials and try again!
            </ErrorLabel>
          )}
          <Button type="submit">Sign In</Button>
          <p> OR </p>
          <Button type="button">Continue with Google</Button>
        </Form>
        <br />
        <h3>Don't have an account?</h3>
        <h3>
          <Link to="/signup">Sign Up</Link> here.
        </h3>
      </Wrapper>
    </SignInBody>
  );
};

export default SignInForm;
