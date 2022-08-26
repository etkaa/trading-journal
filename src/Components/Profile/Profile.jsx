import React, { Fragment, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { UserContext } from "../../Context/User.Context";
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

// const defaultProfileFields = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   initialBalance: "",
//   brokerName: "",
// };

const Profile = () => {
  const { currentUser, updateUserProfileFields } = useContext(UserContext);
  const userProfileFields = {
    firstName: currentUser.fullName || "",
    lastName: currentUser.lastName || "",
    email: currentUser.username,
    initialBalance: currentUser.profile.initialBalance || "",
    brokerName: currentUser.profile.brokerName || "",
  };

  const [profileFormFields, setProfileFormFields] = useState(userProfileFields);
  const { firstName, lastName, email, initialBalance, brokerName } =
    profileFormFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfileFormFields({ ...profileFormFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateUserProfileFields(profileFormFields);
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
          <StyledForm onSubmit={handleSubmit}>
            <InputDiv>
              <label>Name</label>
              <ProfileInfoInput
                placeholder="'First Name'"
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
                placeholder="'Last Name'"
                type="text"
                onChange={handleChange}
                name="lastName"
                value={lastName}
                autoComplete="off"
              />
            </InputDiv>
            <InputDiv>
              <label>E-Mail Address</label>
              <ProfileInfoInput
                placeholder="'Email'"
                type="text"
                onChange={handleChange}
                name="email"
                value={email}
                required
                disabled
                autoComplete="off"
              />
            </InputDiv>
            <InputDiv>
              <label>Initial Balance</label>
              <ProfileInfoInput
                placeholder="'Initial Balance'"
                type="string"
                onChange={handleChange}
                name="initialBalance"
                value={initialBalance}
                autoComplete="off"
              />
            </InputDiv>
            <InputDiv>
              <label>Broker Name</label>
              <ProfileInfoInput
                placeholder="'Broker Name'"
                type="text"
                onChange={handleChange}
                name="brokerName"
                value={brokerName}
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
