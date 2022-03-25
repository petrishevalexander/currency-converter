import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ConverterPage } from "./pages/ConverterPage";
import { ExchangeRatesPage } from "./pages/ExchangeRatesPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./components/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const uri =
      "http://api.currencylayer.com/live?access_key=0ab655dc60a67dcf3f5cc380c7a31b94";
    axios.get(uri).then((response) => {
      const data = response.data.quotes;
      const correctData = {};
      const currenceList = [
        "USDRUB",
        "USDUSD",
        "USDEUR",
        "USDGBP",
        "USDSEK",
        "USDNOK",
        "USDTRY",
      ];
      for (let key in data) {
        if (currenceList.includes(key)) {
          const newKey = key.slice(3);
          correctData[newKey] = data[key];
        }
      }
      setData(correctData);
    });
  }, []);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ConverterPage data={data} />} />
        <Route path="/rates" element={<ExchangeRatesPage data={data} />} />
      </Routes>
    </>
  );
}

export default App;
