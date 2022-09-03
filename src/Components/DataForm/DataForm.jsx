import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/User.Context";
import { updateUserTrades } from "../../Utils/ApiRequests";
import {
  FormContainer,
  StyledForm,
  FormInput,
  Button,
} from "./DataForm.styles";

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

const DataForm = () => {
  const { currentUser, setToggler, toggler } = useContext(UserContext);
  const [dataFormFields, setDataFormFields] = useState(defaultDataFormFields);
  const { pair, date, time, open, close, volume, riskReward, pAndL } =
    dataFormFields;

  const handleChange = (event) => {
    var { name, value } = event.target;

    // if (name === "date") {
    //   value = formatDate(value);
    // }

    setDataFormFields({ ...dataFormFields, [name]: value });
    console.log(dataFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(dataFormFields);
    const userId = currentUser._id;
    const result = await updateUserTrades(userId, dataFormFields);
    if (result === true) {
      setToggler(!toggler);
    } else {
      alert("Please try again!");
    }
    setDataFormFields(defaultDataFormFields);
  };

  // const formatDate = (date) => {
  //   const dateElements = date.split("-");
  //   const year = dateElements[0];
  //   const month = dateElements[1];
  //   const day = dateElements[2];
  //   const newDate = [month, day, year];
  //   return newDate.join("-");
  // };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormInput
          placeholder="Pair"
          type="text"
          onChange={handleChange}
          name="pair"
          value={pair}
          u
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Date"
          type="date"
          onChange={handleChange}
          name="date"
          value={date}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Time"
          type="time"
          onChange={handleChange}
          name="time"
          value={time}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Open"
          type="number"
          onChange={handleChange}
          name="open"
          value={open}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Close"
          type="number"
          onChange={handleChange}
          name="close"
          value={close}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Volume"
          type="number"
          onChange={handleChange}
          name="volume"
          value={volume}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Risk/Reward"
          type="number"
          onChange={handleChange}
          name="riskReward"
          value={riskReward}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="P/L($)"
          type="number"
          onChange={handleChange}
          name="pAndL"
          value={pAndL}
          required
          autoComplete="off"
        />
        <Button type="submit">Add</Button>
      </StyledForm>
    </FormContainer>
  );
};

export default DataForm;
