import React, { useState, useEffect, Fragment } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/User.Context";
import { getUserProfileFields } from "../../Utils/ApiRequests";
import { updateUserProfileFields } from "../../Utils/ApiRequests";
import Spinner from "../Spinner/Spinner";
import {
  StyledForm,
  InputDiv,
  ProfileInfoInput,
  Button,
} from "./ProfileForm.styles";

const defaultProfileFields = {
  fullName: "",
  email: "",
  initialBalance: "",
  brokerName: "",
};

const ProfileForm = () => {
  const { currentUser } = useContext(UserContext);
  const [profileFormFields, setProfileFormFields] =
    useState(defaultProfileFields);
  const [edited, setEdited] = useState(false);
  const [loading, setLoading] = useState(false);
  const { fullName, email, initialBalance, brokerName } = profileFormFields;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const userProfileFields = await getUserProfileFields(currentUser._id);
      setLoading(false);
      setProfileFormFields(userProfileFields);
    };
    fetchData();
  }, [currentUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEdited(true);
    setProfileFormFields({ ...profileFormFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await updateUserProfileFields(
      currentUser._id,
      profileFormFields
    );
    if (result === true) {
      alert("Successfully updated!");
    } else {
      console.log("not success");
    }
    setEdited(false);
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          <InputDiv>
            <label>Name</label>
            <ProfileInfoInput
              placeholder="'Full Name'"
              type="text"
              onChange={handleChange}
              name="fullName"
              value={fullName}
              required
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
          <Button type="submit" disabled={!edited}>
            Update Profile
          </Button>
        </StyledForm>
      )}
    </Fragment>
  );
};

export default ProfileForm;
