import React,{useState, useEffect} from 'react'
import axios from 'axios'


function Weather() {
    const [weather, setWeather] = useState([])

useEffect( async () => {
    let response = await axios.get('http://api.weatherstack.com/current?access_key=9be9650123c2e3656d516e262ecefac9&query=Mumbai')
    let apiResponse = response.data
    setWeather(apiResponse)
}, [])

console.log(weather)

    return (
        
      <div>
        <h1>Current temperature in mumbai { weather.current.temperature}</h1>
      </div>
        
    )
}

export default Weather
