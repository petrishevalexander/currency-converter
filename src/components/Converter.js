import { useState } from "react";
import { CurrencyForm } from "./CurrencyForm";

export const Converter = ({ data }) => {
  const [amountFrom, setAmountFrom] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("USD");

  const [amountTo, setAmountTo] = useState("");
  const [currencyTo, setCurrencyTo] = useState("RUB");

  const currencyNames = Object.keys(data);

  function amountFromChangeHandler(newAmountFrom) {
    setAmountTo(
      ((newAmountFrom * data[currencyTo]) / data[currencyFrom]).toFixed(4)
    );
    setAmountFrom(newAmountFrom);
  }

  function currencyFromChangeHandler(newCurrencyFrom) {
    setAmountTo(
      ((amountFrom * data[currencyTo]) / data[newCurrencyFrom]).toFixed(4)
    );
    setCurrencyFrom(newCurrencyFrom);
  }

  function amountToChangeHandler(newAmountTo) {
    setAmountFrom(
      ((newAmountTo * data[currencyFrom]) / data[currencyTo]).toFixed(4)
    );
    setAmountTo(newAmountTo);
  }

  function currencyToChangeHandler(newCurrencyTo) {
    setAmountTo(
      ((amountFrom * data[newCurrencyTo]) / data[currencyFrom]).toFixed(4)
    );
    setCurrencyTo(newCurrencyTo);
  }

  return (
    <div className="">
      <h1 className="">Currency Converter</h1>
      <div className="">
        <CurrencyForm
          currencyNames={currencyNames}
          amount={amountFrom}
          currency={currencyFrom}
          onChangeAmount={amountFromChangeHandler}
          onChangeCurrancy={currencyFromChangeHandler}
          placeholder="Enter the amount..."
        />
        <CurrencyForm
          currencyNames={currencyNames}
          amount={amountTo}
          currency={currencyTo}
          onChangeAmount={amountToChangeHandler}
          onChangeCurrancy={currencyToChangeHandler}
          disabled="disabled"
          placeholder="Result will be here..."
        />
      </div>
    </div>
  );
};
