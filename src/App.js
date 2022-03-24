import { useEffect, useState } from "react";
import "./App.css";
import { CurrencyForm } from "./components/CurrencyForm";
import axios from "axios";

function App() {
  const [appState, setAppState] = useState({});

  // const [amountFrom, setAmountFrom] = useState("10");
  // const [currencyFrom, setCurrencyFrom] = useState("USD");

  // const [amountTo, setAmountTo] = useState("10");
  // const [currencyTo, setCurrencyTo] = useState("RUB");

  useEffect(() => {
    const uri =
      "http://api.currencylayer.com/live?access_key=0ab655dc60a67dcf3f5cc380c7a31b94";
    axios.get(uri).then((responce) => {
      setAppState(responce.data.quotes);
    });
  }, []);

  return (
    <div className="App">
      <CurrencyForm currencies={appState} />
      <CurrencyForm currencies={appState} />
    </div>
  );
}

export default App;
