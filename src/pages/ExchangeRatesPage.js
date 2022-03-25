import React, { useEffect, useState } from "react";
import { ExchangeRateFromBlock } from "../components/ExchangeRateFromBlock";
import { ExchangeRateToBlock } from "../components/ExchangeRateToBlock";

export const ExchangeRatesPage = ({ data }) => {
  useEffect(() => {
    const array = [];
    for (let key in data) {
      array.push({ currency: key, amount: data[key] });
    }
    setRate(array);
    setCustomRate(array);
  }, [data]);

  const [amountFrom, setAmountFrom] = useState("1");
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [rate, setRate] = useState([]);
  const [customRate, setCustomRate] = useState([]);
  const currencyNames = Object.keys(data);

  function updateArray(amountFrom, currencyFrom) {
    const itemFrom = rate.find((item) => item.currency === currencyFrom);
    const newRate = rate.map((item) => {
      return {
        currency: item.currency,
        amount: ((amountFrom * item.amount) / itemFrom.amount).toFixed(4),
      };
    });
    setCustomRate(newRate);
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
      <h1 className="text-center mt-1">Exchange Rates</h1>
      <div className="text-center mt-1">
        <ExchangeRateFromBlock
          currencyNames={currencyNames}
          amount={amountFrom}
          currency={currencyFrom}
          onChangeAmount={onChangeAmount}
          onChangeCurrancy={onChangeCurrancy}
        />
        <ExchangeRateToBlock rate={customRate} />
      </div>
    </div>
  );
};
