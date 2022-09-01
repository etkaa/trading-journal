import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import ProfileForm from "../ProfileForm/ProfileForm";
import {
  ProfileContainer,
  ImageContainer,
  ProfilePicture,
  ImageInputLabel,
  FormContainer,
} from "./Profile.styles";

const Profile = () => {
  //when upload file, upload it to cloud,
  //get download link back, save it to user

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
          <ProfileForm />
        </FormContainer>
      </ProfileContainer>
    </Fragment>
  );
};

export default Profile;
