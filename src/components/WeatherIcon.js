import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faBolt, faSnowflake, faSun, faUmbrella, faSmog } from '@fortawesome/free-solid-svg-icons'

function WeatherIcon({ weatherType }) {
    switch(weatherType) {
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud} />
        case 'Sun':
            return <FontAwesomeIcon icon={faSun} />
        case 'Snow':
            return <FontAwesomeIcon icon={faSnowflake} />
        case 'Thunder':
            return <FontAwesomeIcon icon={faBolt} />
        case "Rain":
            return <FontAwesomeIcon icon={faUmbrella} />
        case "Fog":
            return <FontAwesomeIcon icon={faSmog} />
        default:
            return null
    }
}

export default WeatherIcon