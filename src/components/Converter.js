import { useEffect, useState } from "react";
import { CurrencyForm } from "./CurrencyForm";
import axios from "axios";

export const Converter = () => {
  const [data, setData] = useState({});

  const [amountFrom, setAmountFrom] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("USD");

  const [amountTo, setAmountTo] = useState("");
  const [currencyTo, setCurrencyTo] = useState("RUB");

  useEffect(() => {
    const uri =
      "http://api.currencylayer.com/live?access_key=0ab655dc60a67dcf3f5cc380c7a31b94";
    axios.get(uri).then((response) => {
      const data = response.data.quotes;
      const correctData = {};
      for (let key in data) {
        if (key === "USDRUB" || key === "USDUSD" || key === "USDEUR") {
          const newKey = key.slice(3);
          correctData[newKey] = data[key];
        }
      }
      setData(correctData);
    });
  }, []);
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
