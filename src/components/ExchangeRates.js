import React, { useState } from "react";
import { ExchangeRateFromBlock } from "./ExchangeRateFromBlock";
import { ExchangeRateToBlock } from "./ExchangeRateToBlock";

export const ExchangeRates = ({ data }) => {
  const convertObjDataToArray = (data) => {
    const array = [];
    for (let key in data) {
      array.push({ currency: key, amount: data[key] });
    }
    return array;
  };
  const [amountFrom, setAmountFrom] = useState("1");
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [rate, setRate] = useState(convertObjDataToArray(data));
  const currencyNames = Object.keys(data);

  function updateArray(amountFrom, currencyFrom) {
    const itemFrom = rate.find((item) => item.currency === currencyFrom);
    const newRate = rate.map((item) => {
      return {
        currency: item.currency,
        amount: ((amountFrom * item.amount) / itemFrom.amount).toFixed(4),
      };
    });
    setRate(newRate);
  }

  function onChangeAmount(newAmountFrom) {
    updateArray(newAmountFrom, currencyFrom);
    setAmountFrom(newAmountFrom);
  }

  function onChangeCurrancy(newCurrencyFrom) {
    updateArray(amountFrom, newCurrencyFrom);
    setCurrencyFrom(newCurrencyFrom);
  }
  return (
    <div>
      <ExchangeRateFromBlock
        currencyNames={currencyNames}
        amount={amountFrom}
        currency={currencyFrom}
        onChangeAmount={onChangeAmount}
        onChangeCurrancy={onChangeCurrancy}
      />
      <ExchangeRateToBlock rate={rate} />
    </div>
  );
};
