import React, { useEffect, useState } from "react";
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import axios from "axios";

    // query openapi for weather data
    // make request
    const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Baltimore&appid=${WEATHER_APP_API_KEY}`;

function Home() {

    // value stored in state for weather data
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        axios
        .get(openWeatherURL)
        .then(function (response) {
        // handle success
            setWeatherData(response.data)
        })
        .catch(function (error) {
            // handle error
            console.warn(error);
            setWeatherData({})
        });
    }, [])
    console.log("state value", weatherData)

    return (
        <div>
            <h1>Weather App</h1>
            <h2>City: {weatherData.name}</h2>
            <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
    )
}

export default Home;