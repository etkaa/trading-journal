import React, { Fragment, useState } from "react";
import Navigation from "../Navigation/Navigation";
import {
  ProfileContainer,
  ImageContainer,
  FormContainer,
  StyledForm,
  ProfileInfoInput,
  InputDiv,
} from "./Profile.styles";

//WILL NEED TO GET THESE DEFAULT VALUES FROM USER OBJECT

const defaultProfileField = {
  firstName: "",
  lastName: "",
  email: "",
  brokerName: "",
};

const Profile = () => {
  const [profileFields, setProfileFields] = useState(defaultProfileField);
  const { firstName, lastName, email, brokerName } = profileFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfileFields({ ...profileFields, [name]: value });
  };

  return (
    <Fragment>
      <Navigation />
      <ProfileContainer>
        <ImageContainer>
          <h2>Profile Picture</h2>
          <img alt={""} src={""} />
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
          </StyledForm>
        </FormContainer>
      </ProfileContainer>
    </Fragment>
  );
};

export default Profile;
