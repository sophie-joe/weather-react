import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp} degrees C`
    );
  }

  let apiKey = "d06e9073694a0fc6183b83aa2f9b6a1d";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;

  axios.get(weatherUrl).then(handleResponse);

  return <h2>Hello World</h2>;
}
