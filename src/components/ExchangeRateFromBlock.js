import React from "react";

export const ExchangeRateFromBlock = ({
  currencyNames,
  amount,
  currency,
  onChangeAmount,
  onChangeCurrancy,
}) => {
  return (
    <>
      <input
        type="number"
        value={amount}
        onChange={(event) => onChangeAmount(event.target.value)}
      />
      <select
        value={currency}
        onChange={(event) => onChangeCurrancy(event.target.value)}
      >
        {currencyNames.map((currencyName) => {
          return (
            <option value={currencyName} key={currencyName}>
              {currencyName}
            </option>
          );
        })}
      </select>
    </>
  );
};
