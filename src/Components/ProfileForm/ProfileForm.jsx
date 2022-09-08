import React, { useState, useEffect, Fragment } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/User.Context";
import { getUserProfileFields } from "../../Utils/ApiRequests";
import { updateUserProfileFields } from "../../Utils/ApiRequests";
import Spinner from "../Spinner/Spinner";
import {
  StyledForm,
  InputDiv,
  ProfileInfoInput,
  ButtonDiv,
  Button,
} from "./ProfileForm.styles";

const defaultProfileFields = {
  fullName: "",
  email: "",
  initialBalance: "",
  brokerName: "",
  profileImageUrl: "",
};

const ProfileForm = ({ onImageChange }) => {
  const { currentUserID, toggler, setToggler, setIsAuthenticated } =
    useContext(UserContext);
  const [profileFormFields, setProfileFormFields] =
    useState(defaultProfileFields);
  const [edited, setEdited] = useState(false);
  const [loading, setLoading] = useState(false);
  const { fullName, email, initialBalance, brokerName, profileImageUrl } =
    profileFormFields;
  const [uneditedProfileFields, setUnEditedProfileFields] =
    useState(profileFormFields);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await getUserProfileFields(currentUserID)
        .then((response) => {
          setLoading(false);
          setProfileFormFields(response);
          setUnEditedProfileFields(response);
          onImageChange(response.profileImageUrl || null);
        })
        .catch((error) => {
          const err = JSON.parse(error.message);
          if (err.status === "401") {
            setIsAuthenticated(false);
            navigate("/signin");
          }
          console.log(error);
        });
    };
    fetchData();
  }, [
    currentUserID,
    setUnEditedProfileFields,
    onImageChange,
    toggler,
    setIsAuthenticated,
    navigate,
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEdited(true);
    setProfileFormFields({ ...profileFormFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await updateUserProfileFields(
      currentUserID,
      profileFormFields
    );
    if (result === true) {
      setToggler(!toggler);
    } else {
      alert("There was a problem, please try again.");
    }
    setEdited(false);
  };

  const cancelHandler = () => {
    setProfileFormFields(uneditedProfileFields);
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
              title="Can't change"
              className="emailField"
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
              type="number"
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
          <InputDiv>
            <label>Profile Image URL</label>
            <ProfileInfoInput
              placeholder="'http://example.com/profile/picture'"
              type="text"
              onChange={handleChange}
              name="profileImageUrl"
              value={profileImageUrl}
              autoComplete="off"
              className="urlField"
            />
          </InputDiv>
          <ButtonDiv>
            <Button type="submit" disabled={!edited}>
              Update
            </Button>
            {edited && (
              <Button type="button" onClick={cancelHandler} className="cancel">
                Cancel
              </Button>
            )}
          </ButtonDiv>
        </StyledForm>
      )}
    </Fragment>
  );
};

export default ProfileForm;
