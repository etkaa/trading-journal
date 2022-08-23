import React, { useState } from "react";
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
  outcome: "",
  riskReward: "",
  pAndL: "",
};

const DataForm = () => {
  const [dataFormFields, setDataFormFields] = useState(defaultDataFormFields);
  const { pair, date, time, open, close, volume, outcome, riskReward, pAndL } =
    dataFormFields;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataFormFields);
    setDataFormFields(defaultDataFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDataFormFields({ ...dataFormFields, [name]: value });
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormInput
          placeholder="Pair"
          type="text"
          onChange={handleChange}
          name="pair"
          value={pair}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Date"
          type="text"
          onChange={handleChange}
          name="date"
          value={date}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Time"
          type="text"
          onChange={handleChange}
          name="time"
          value={time}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Open"
          type="text"
          onChange={handleChange}
          name="open"
          value={open}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Close"
          type="text"
          onChange={handleChange}
          name="close"
          value={close}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Volume"
          type="text"
          onChange={handleChange}
          name="volume"
          value={volume}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Outcome"
          type="text"
          onChange={handleChange}
          name="outcome"
          value={outcome}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="Risk/Reward"
          type="text"
          onChange={handleChange}
          name="riskReward"
          value={riskReward}
          required
          autoComplete="off"
        />
        <FormInput
          placeholder="P/L($)"
          type="text"
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
