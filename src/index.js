import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Form from "./Form";
import CurrentWeather from "./Current-Weather";
import Forecast from "./Forecast";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Header />
    <Form />
    <CurrentWeather />
    <Forecast />
  </StrictMode>,
  rootElement
);
