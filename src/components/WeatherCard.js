import React from "react";
import WeatherIcon from "./WeatherIcon";

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
            <h3>{city}</h3>
            <p id="tempValue">{currTemp} F</p>
            <div className="weatherCard--weatherType">
                <p className="weatherCard--type">{weatherType}</p>
                <WeatherIcon weatherType={weatherType} />
            </div>
            <p><b>Cloudiness: </b>{cloudy}%</p>
            <p><b>Humidity: </b>{humidity}%</p>
            <p><b>Wind Speed: </b>{windSpeed} mph</p>
            <p><b>High: </b>{highTemp} F</p>
            <p><b>Low: </b>{lowTemp} F</p>
        </div>
    )
}

export default WeatherCard