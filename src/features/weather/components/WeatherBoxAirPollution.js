import React from 'react';
import { useSelector } from 'react-redux'
import { selectDataPollution } from '../weatherSlice'
import { Link, BrowserRouter as Router } from 'react-router-dom'

function WeatherBoxAirPollution() {

    const dataPollution = useSelector(selectDataPollution)

    function getAirQuality() {
        const airPollutionPm2_5 = dataPollution.data.list[0].components.pm2_5

        if(airPollutionPm2_5 < 13) {
            return ['Very Good', 'The air quality is satisfactory and the risk from air pollution is low or absent.', 'green']
        } else if(airPollutionPm2_5 > 13 && airPollutionPm2_5 < 35) {
            return ['Good', 'The air quality is satisfactory and the risk from air pollution is low or absent.', 'green']
        } else if(airPollutionPm2_5 > 35 && airPollutionPm2_5 < 55) {
            return ['Moderate', 'Air quality is acceptable, but some air pollutants can cause moderate health problems in a small number of people who are particularly sensitive to air pollution.', 'orange']
        } else if(airPollutionPm2_5 > 55 && airPollutionPm2_5 < 75) {
            return ['Sufficient', 'Members of sensitive groups may experience health effects', 'orange']
        } else if (airPollutionPm2_5 > 75 && airPollutionPm2_5 < 110) {
            return ['Bad', 'Members of sensitive groups may experience health effects', 'red']
        } else {
            return ['Very bad', 'Anyone can feel health effects, members of vulnerable groups can have serious health effects']
        }

    }

    return(
        <>
            <div className="weather-box-air-pollution-container">
                <p className="weather-box-air-pollution-name">Air quality index:</p>
                <p className="weather-box-air-pollution-index" style={{color: getAirQuality()[2]}}>{getAirQuality()[0]}</p>
                <p className="weather-box-air-pollution-amount">PM2.5: {dataPollution.data.list[0].components.pm2_5}μg/m3</p>
                <p className="weather-box-air-pollution-description">{getAirQuality()[1]}</p>
                <Link className="weather-box-air-pollution-link" to="/pollutioninfo">Check details</Link>
            </div>
        </>
    )
}

export default WeatherBoxAirPollution