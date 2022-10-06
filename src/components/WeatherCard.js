import React from "react";

function WeatherCard ({ 
    humidity,
    city,
    weatherType,
    currTemp,
    highTemp,
    lowTemp,
    cloudy,
    windSpeed, 
}) {
    return (
        <div className="weatherCard">
            <h2>{city}</h2>
            <p>Temperature: {currTemp} F</p>
            <p>Weather Type: {weatherType}</p>
            <p>Cloudiness: {cloudy}%</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind Speed: {windSpeed} mph</p>
            <p>High: {highTemp} F</p>
            <p>Low: {lowTemp} F</p>
        </div>
    )
}

export default WeatherCard