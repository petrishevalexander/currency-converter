import React, { useState } from "react";

export const CurrencyForm = ({ currencies }) => {
  const [amount, setAmount] = useState("0");
  const [currency, setCurrency] = useState(null);

  console.log(amount, currency);

  const currenciesList = Object.keys(currencies);
  const onChangeAmount = (event) => {
    setAmount(event.target.value);
    // console.log(amount);
  };
  const onChangeCurrancy = (event) => {
    setCurrency(event.target.value);
    // console.log(currency);
  };
  return (
    <div>
      <input type="text" value={amount} onChange={onChangeAmount} />
      <select onChange={onChangeCurrancy}>
        {currenciesList.map((currency) => {
          return <option>{currency}</option>;
        })}
      </select>
    </div>
  );
};
