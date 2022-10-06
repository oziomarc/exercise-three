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
            <p><b>Temperature: </b>{currTemp} F</p>
            <p><b>Weather Type: </b>{weatherType}</p>
            <p><b>Cloudiness: </b>{cloudy}%</p>
            <p><b>Humidity: </b>{humidity}%</p>
            <p><b>Wind Speed: </b>{windSpeed} mph</p>
            <p><b>High: </b>{highTemp} F</p>
            <p><b>Low: </b>{lowTemp} F</p>
        </div>
    )
}

export default WeatherCard