import React, { useState } from "react";

export const CurrencyForm = ({
  currencyNames,
  amount,
  currency,
  onChangeAmount,
  onChangeCurrancy,
  disabled,
  placeholder,
}) => {
  return (
    <div>
      <input
        type="number"
        placeholder={placeholder}
        disabled={disabled}
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
    </div>
  );
};
