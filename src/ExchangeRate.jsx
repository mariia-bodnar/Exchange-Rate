import { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "./axios";

export const ExchangeRate = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axiosInstance.get("/currency_data/list").then((res) => {
      const currencyList = Object.entries(res.data.currencies).map(
        ([key, value]) => ({ id: key, label: value })
      );
      setCurrencies(currencyList);
    });
  }, []);
  return (
    <S.Box>
      <div>
        <select multiple={false}>
          {currencies.map(c => (<option key={c.id} >{c.label}<strong>({c.id})</strong></option>))}
          {/* <option value={1}>First option</option> */}
        </select>
      </div>
    </S.Box>
  );
};
const S = {
  Box: styled.div`
    width: 70%;
    height: 70%;
    border: 4px solid var(--main-color);
    margin: auto;
    border-radius: 8px;
    @media (max-width: 767px) {
      width: 85%;
      height: 75%;
    }
    @media (max-width: 576px) {
      width: 100%;
      height: 75%;
    } ;
  `,
};
