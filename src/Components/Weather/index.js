import React,{useState, useEffect} from 'react'
import axios from 'axios'


function Weather() {
    const [weather, setWeather] = useState([])

useEffect( async () => {
    let data = await axios.get('http://api.weatherstack.com/current?access_key=9be9650123c2e3656d516e262ecefac9&query=Mumbai')
    console.log(data)
}, [])


    return (
        
         <h1>Weather</h1>   
        
    )
}

export default Weather
