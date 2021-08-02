import React, { useState, useEffect } from "react";
import Weather from "../Weather";
import "./style.css";
import axios from "axios";

function Home() {
  const [weather, setWeather] = useState([]);

  useEffect(async () => {
    let response = await axios.get(
      "http://api.weatherstack.com/current?access_key=9be9650123c2e3656d516e262ecefac9&query=Mumbai"
    );
    setWeather(response.data)
  }, []);

 console.log(weather.location.name)

  return (
    <div className="home-container">
      <Weather
        name={weather.location.name}
        temp={weather.current.temperature}
        description={weather.current.weather_description}
      />
    </div>
  );
}

export default Home;
