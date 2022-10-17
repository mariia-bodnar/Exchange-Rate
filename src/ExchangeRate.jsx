import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCurrencies, convert } from "./convert";
import { Select, MenuItem, TextField } from "@mui/material";

export const ExchangeRate = () => {
  const [currencies, setCurrencies] = useState([]);

  const [currType1, setCurrType1] = useState("usd");
  const [amount1, setAmount1] = useState(0);

  const [currType2, setCurrType2] = useState("usd");
  const [amount2, setAmount2] = useState(0);

  useEffect(() => {
    getCurrencies().then(setCurrencies);
  }, []);

  return (
    <S.Box>
      <S.Wrapper>
        <Select
          multiple={false}
          value={currType1}
          onChange={(e) => {
            setCurrType1(e.target.value);
            convert(currType2, e.target.value, amount1).then(setAmount2);
          }}
        >
          {currencies.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          type="number"
          value={amount1}
          onChange={(e) => {
            let value = e.target.value;

            if (value.length > 0 && value[0] === "0")
              value = value.substring(1);

            setAmount1(value);

            convert(currType1, currType2, +value).then(setAmount2);
          }}
        />
      </S.Wrapper>
      <S.Wrapper>
        <Select
          multiple={false}
          value={currType2}
          onChange={(e) => {
            setCurrType2(e.target.value);
            convert(currType1, e.target.value, amount1).then(setAmount2);
          }}
        >
          {currencies.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          type="number"
          value={amount2}
          onChange={(e) => {
            let value = e.target.value;

            if (value.length > 0 && value[0] === "0")
              value = value.substring(1);

            setAmount2(value);

            convert(currType2, currType1, +value).then(setAmount1);
          }}
        />
      </S.Wrapper>
    </S.Box>
  );
};
const S = {
  Box: styled.div`
    max-width: 360px;
    border: 2px dotted var(--main-color);
    margin: auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  `,
  Wrapper: styled.div`
    padding: 16px;
    display: flex;
    gap: 5%;
    width: auto;
    margin: auto;
  `,
};
