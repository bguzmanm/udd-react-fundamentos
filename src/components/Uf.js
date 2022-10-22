import axios from "axios";
import React from "react";

const getWeather = async (url) => {
  const respuesta = await axios.get(url);
  return respuesta.data.current_weather;
}
let temp;
getWeather('https://api.open-meteo.com/v1/forecast?latitude=-33.4691&longitude=-70.6420&current_weather=true')
.then((data) => {
  temp = data.temperature;
});

function Uf() {
  return (
    <div>
      <h3>La temperatura</h3>
      <p>En santiago, a esta hora, hay {temp} celcius.</p>
    </div>
  );
}

export { Uf };