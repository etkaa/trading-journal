import React, { Fragment, useState } from "react";
import Navigation from "../Navigation/Navigation";
import {
  ProfileContainer,
  ImageContainer,
  ProfilePicture,
  ImageInputLabel,
  FormContainer,
  StyledForm,
  ProfileInfoInput,
  InputDiv,
  Button,
} from "./Profile.styles";

//WILL NEED TO GET THESE DEFAULT VALUES FROM USER OBJECT

const defaultProfileField = {
  firstName: "",
  lastName: "",
  email: "",
  initialBalance: "",
  brokerName: "",
};

const Profile = () => {
  const [profileFields, setProfileFields] = useState(defaultProfileField);
  const { firstName, lastName, email, initialBalance, brokerName } =
    profileFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfileFields({ ...profileFields, [name]: value });
  };

  return (
    <Fragment>
      <Navigation />
      <ProfileContainer>
        <ImageContainer>
          <ProfilePicture>
            <img
              alt={""}
              src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />
          </ProfilePicture>
          <ImageInputLabel>
            <input type="file" accept="image/png, image/jpeg" />
            <p>Upload</p>
          </ImageInputLabel>
        </ImageContainer>
        <FormContainer>
          <StyledForm>
            <InputDiv>
              <label>Name</label>
              <ProfileInfoInput
                placeholder="Name"
                type="text"
                onChange={handleChange}
                name="firstName"
                value={firstName}
                required
                autoComplete="off"
              />
            </InputDiv>
            <InputDiv>
              <label>Last Name</label>
              <ProfileInfoInput
                placeholder="Last Name"
                type="text"
                onChange={handleChange}
                name="lastName"
                value={lastName}
                required
                autoComplete="off"
              />
            </InputDiv>
            <InputDiv>
              <label>E-Mail Address</label>
              <ProfileInfoInput
                placeholder="E-Mail Address"
                type="text"
                onChange={handleChange}
                name="email"
                value={email}
                required
                autoComplete="off"
              />
            </InputDiv>
            <InputDiv>
              <label>Initial Balance</label>
              <ProfileInfoInput
                placeholder="Initial Balance"
                type="string"
                onChange={handleChange}
                name="initialBalance"
                value={initialBalance}
                required
                autoComplete="off"
              />
            </InputDiv>
            <InputDiv>
              <label>Broker Name</label>
              <ProfileInfoInput
                placeholder="Broker Name"
                type="text"
                onChange={handleChange}
                name="brokerName"
                value={brokerName}
                required
                autoComplete="off"
              />
            </InputDiv>
            <Button type="submit">Update Profile</Button>
          </StyledForm>
        </FormContainer>
      </ProfileContainer>
    </Fragment>
  );
};

export default Profile;
