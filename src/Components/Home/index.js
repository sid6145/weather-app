import React, { useState, useEffect } from "react";
import Weather from "../Weather";
import "./style.css";

function Home() {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=8f7c13c7d5f2756dae2211f3beaca3e4"
    )
      .then((res) => res.json())
      .then((json) => setWeather(json));
  }, []);

console.log(weather)

  return (
    <div className="home-container">
      <video autoPlay loop muted id="video">
        <source src='rain.mp4' type='video/mp4' />
      </video>

      <Weather
        name={weather.name}
        temp={weather.main.temp}
        description={weather.weather[0].description}
      />
    </div>
  );
}

export default Home;
