import React, { useEffect, useState, useMemo } from "react";
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import axios from "axios";
import WeatherCard from "../components/WeatherCard.js";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
    

function Home() {

    // value stored in state for weather data
    // weather data is empty object on first render
    // second render queries data
    const [weatherData, setWeatherData] = useState({}); // useState is a hook, default value is an object

    // Cities: Seoul, Chicago, Paris, Baltimore, Washington DC, Tokyo
    const [searchParams] = useSearchParams();
    const [city, setCity] = useState('Baltimore'); // baltimore is default value

    useEffect(() => {
        const cityToQuery = searchParams.get('city') || city;
        setCity(cityToQuery)

        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`) // ??promise
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

    const { humidity, weatherType, currTemp, highTemp, lowTemp, cloudy, windSpeed } = useMemo(() => {
        const weatherMain = weatherData.main || {};
        const weatherType = weatherData.weather || [0];
        const weatherClouds = weatherData.clouds || {};
        const weatherWindSpeed = weatherData.wind || {};
        return {
            humidity: weatherMain.humidity,
            weatherType: weatherType && weatherType[0].main,
            currTemp: weatherMain.temp,
            highTemp: weatherMain.temp_max,
            lowTemp: weatherMain.temp_min,
            cloudy: weatherClouds.all,
            windSpeed: weatherWindSpeed.speed,
        };
    }, [weatherData])

    // console.log("state value", weatherData)

    return (
        <div className="page">
            <h1 className="title-text">Better Weather</h1>
            <p><em>Live, up to date weather data.</em></p>
            <Header/>
            <WeatherCard 
            city={city}
            humidity={humidity}
            weatherType={weatherType}
            currTemp={currTemp}
            highTemp={highTemp}
            lowTemp={lowTemp}
            cloudy={cloudy}
            windSpeed={windSpeed}
            />
        </div>
    )
}

export default Home;