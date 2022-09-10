import React, { Fragment, useState } from "react";
import Navigation from "../Navigation/Navigation";
import ProfileForm from "../ProfileForm/ProfileForm";
import {
  ProfileContainer,
  ImageContainer,
  ProfilePicture,
  FormContainer,
  ProfileBody,
} from "./Profile.styles";

const Profile = () => {
  //when upload file, upload it to cloud,
  //get download link back, save it to user
  const defaultImageAddress =
    "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

  const [imageAddress, setImageAddress] = useState(defaultImageAddress);

  const handleImageChange = (link) => {
    if (link !== null) {
      setImageAddress(link);
    }
  };

  return (
    <Fragment>
      <ProfileBody>
        <Navigation />
        <ProfileContainer>
          <ImageContainer>
            <ProfilePicture>
              <img alt={""} src={imageAddress} />
            </ProfilePicture>
          </ImageContainer>
          <FormContainer>
            <ProfileForm onImageChange={handleImageChange} />
          </FormContainer>
        </ProfileContainer>
      </ProfileBody>
    </Fragment>
  );
};

export default Profile;
