import React, { useState, useEffect } from "react";
import Weather from "../Weather";
import "./style.css";
import axios from "axios";

function Home() {
  const [weather, setWeather] = useState([]);

  useEffect( () => {
    fetch( "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=8f7c13c7d5f2756dae2211f3beaca3e4")
    .then((res) => res.json())
    .then((json) => setWeather(json))
  },[weather])
  
  

 console.log(weather)

  return (
    <div className="home-container">
      <Weather
      name={weather.name}
      temp={weather.main.temp}
      description={weather.weather[0].description}
      icon={weather.weather[0].icon}
      />
    </div>
  );
}

export default Home;
