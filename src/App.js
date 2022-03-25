import "./App.css";
import { Routes, Link, Route } from "react-router-dom";
import { Converter } from "./components/Converter";
import { ExchangeRates } from "./components/ExchangeRates";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/rates" element={<ExchangeRates />} />
      </Routes>
    </>
  );
}

export default App;
