import React from "react";
import {
  DetailsBody,
  StyledForm,
  FormInput,
  Button,
  FormContainer,
  ButtonsContainer,
  FormInputLabel,
  FormInputContainer,
} from "./Details.styles";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../Context/User.Context";
import { useNavigate, useParams } from "react-router-dom";
import {
  getTradeDetails,
  patchUserTrade,
  deleteUserTrade,
} from "../../Utils/ApiRequests";
import Spinner from "../Spinner/Spinner";
import Navigation from "../Navigation/Navigation";

const defaultDataFormFields = {
  pair: "",
  date: "",
  time: "",
  open: "",
  close: "",
  volume: "",
  riskReward: "",
  pAndL: "",
};

const Details = () => {
  const { setToggler, toggler, setIsAuthenticated } = useContext(UserContext);
  const [dataFormFields, setDataFormFields] = useState(defaultDataFormFields);
  const [loading, setLoading] = useState(false);
  const { pair, date, time, open, close, volume, riskReward, pAndL } =
    dataFormFields;
  const [unEditedFormFields, setUnEditedFormFields] = useState(dataFormFields);
  const [edited, setEdited] = useState(false);
  const navigate = useNavigate();
  const { tradeId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await getTradeDetails(tradeId)
        .then((response) => {
          setLoading(false);
          setDataFormFields(response);
          setUnEditedFormFields(response);
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
  }, [tradeId, toggler, setIsAuthenticated, navigate]);

  const handleChange = (event) => {
    var { name, value } = event.target;
    setEdited(true);
    setDataFormFields({ ...dataFormFields, [name]: value });
  };

  const cancelHandler = () => {
    setDataFormFields(unEditedFormFields);
    setEdited(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await patchUserTrade(tradeId, dataFormFields);
    if (result === true) {
      setToggler(!toggler);
      alert("Success!");
    } else {
      alert("Please try again!");
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    const message = `WARNING: Are you sure you want to DELETE this trade?\nThis action is irreversible!`;

    if (window.confirm(message)) {
      console.log("Confirmed, trade will be deleted!");
    } else {
      return;
    }

    const result = await deleteUserTrade(tradeId);
    if (result === true) {
      navigate("/dashboard");
    } else {
      alert("There was a problem on our side, please try again!");
    }
  };

  return (
    <DetailsBody>
      <Navigation />
      <FormContainer>
        <StyledForm>
          <FormInputContainer>
            <FormInputLabel>Pair</FormInputLabel>
            <FormInput
              placeholder="Pair"
              type="text"
              onChange={handleChange}
              name="pair"
              value={pair.toUpperCase()}
              u
              required
              autoComplete="off"
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormInputLabel>Date</FormInputLabel>
            <FormInput
              placeholder="Date"
              type="date"
              onChange={handleChange}
              name="date"
              value={date}
              required
              autoComplete="off"
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormInputLabel>Time</FormInputLabel>
            <FormInput
              placeholder="Time"
              type="time"
              onChange={handleChange}
              name="time"
              value={time}
              required
              autoComplete="off"
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormInputLabel>Open</FormInputLabel>
            <FormInput
              placeholder="Open"
              type="number"
              onChange={handleChange}
              name="open"
              value={open}
              required
              autoComplete="off"
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormInputLabel>Close</FormInputLabel>
            <FormInput
              placeholder="Close"
              type="number"
              onChange={handleChange}
              name="close"
              value={close}
              required
              autoComplete="off"
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormInputLabel>Volume</FormInputLabel>
            <FormInput
              placeholder="Volume"
              type="number"
              onChange={handleChange}
              name="volume"
              value={volume}
              required
              autoComplete="off"
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormInputLabel>Risk/Reward</FormInputLabel>
            <FormInput
              placeholder="Risk/Reward"
              type="number"
              onChange={handleChange}
              name="riskReward"
              value={riskReward}
              required
              autoComplete="off"
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormInputLabel>P/L($)</FormInputLabel>
            <FormInput
              placeholder="P/L($)"
              type="number"
              onChange={handleChange}
              name="pAndL"
              value={pAndL}
              required
              autoComplete="off"
            />
          </FormInputContainer>
        </StyledForm>
        <ButtonsContainer>
          <Button onClick={handleSubmit} disabled={!edited}>
            {loading ? <Spinner /> : "Update"}
          </Button>
          {edited ? (
            <Button onClick={cancelHandler} className={"cancel"}>
              Cancel
            </Button>
          ) : null}
          <Button onClick={handleDelete} className={"delete"}>
            {loading ? <Spinner /> : "Delete"}
          </Button>
        </ButtonsContainer>
      </FormContainer>
    </DetailsBody>
  );
};

export default Details;
