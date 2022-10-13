import { useEffect } from "react";
import styled from "styled-components";
import { axiosInstance } from "./axios";

export const ExchangeRate = () => {
  useEffect(() => {
    axiosInstance.get("/currency_data/list").then((res) => {
      console.log(res.json);
    });
  });
  return <S.Box></S.Box>;
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
