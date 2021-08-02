import React,{useState, useEffect} from 'react'
import Weather from '../Weather'
import './style.css'
import axios from 'axios'

function Home() {
    const [weather, setWeather] = useState([])

    useEffect( async () => {
        let response = await axios.get('http://api.weatherstack.com/current?access_key=9be9650123c2e3656d516e262ecefac9&query=Mumbai')
        let apiResponse = response.data
        setWeather(apiResponse)
    }, [])

    return (
        <div className="home-container">
            <Weather />
        </div>
    )
}

export default Home 
