import React from 'react';
import { useSelector } from 'react-redux'
import { selectDataPollution } from '../weatherSlice'
import { Link } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';

function WeatherBoxAirPollution() {

    const dataPollution = useSelector(selectDataPollution)

    function getAirQuality() {
        const airPollutionPm2_5 = dataPollution.data.list[0].components.pm2_5

        if(airPollutionPm2_5 < 7) {
            return ['Very Good', 'The air quality is satisfactory and the risk from air pollution is low or absent.', 'green']
        } else if(airPollutionPm2_5 > 7 && airPollutionPm2_5 < 15) {
            return ['Good', 'The air quality is satisfactory and the risk from air pollution is low or absent.', 'green']
        } else if(airPollutionPm2_5 > 15 && airPollutionPm2_5 < 30) {
            return ['Moderate', 'Air quality is acceptable, but some air pollutants can cause moderate health problems in a small number of people who are particularly sensitive to air pollution.', 'orange']
        } else if(airPollutionPm2_5 > 30 && airPollutionPm2_5 < 55) {
            return ['Sufficient', 'Members of sensitive groups may experience health effects', 'orange']
        } else if (airPollutionPm2_5 > 55 && airPollutionPm2_5 < 110) {
            return ['Bad', 'Members of sensitive groups may experience health effects', 'red']
        } else {
            return ['Very bad', 'Anyone can feel health effects, members of vulnerable groups can have serious health effects']
        }

    }

    return(
        <>
            <div className="weather-box-air-pollution-container">
                <p className="weather-box-air-pollution-name">Air quality index:</p>
                <div className="weather-box-air-pollution-graph-container">
                    <div className="weather-box-air-pollution-graph">
                        <div className="weather-pollution-info-graph" style={{ width: 70, height: 70 }}>
                            <CircularProgressbar 
                                strokeWidth={10} 
                                maxValue={200} 
                                text={Math.round(dataPollution.data.list[0].components.pm2_5 * 2)} 
                                value={Math.round(dataPollution.data.list[0].components.pm2_5)}
                                styles={{
                                    path: {
                                        stroke: '#0C387B'
                                    },
                                    trail: {
                                        stroke: '#e4e4e4'
                                    },
                                    text: {
                                        fill: '#0C387B'
                                    }
                                }} />
                        </div>
                    </div>
                    <div className="weather-box-air-pollution-graph-text">
                        <p className="weather-box-air-pollution-index" style={{color: getAirQuality()[2]}}>{getAirQuality()[0]}</p>
                        <p className="weather-box-air-pollution-amount">PM2.5: {dataPollution.data.list[0].components.pm2_5}μg/m3</p>
                    </div>
                </div>
                <p className="weather-box-air-pollution-description">{getAirQuality()[1]}</p>
                <Link className="weather-box-air-pollution-link" to="/pollutioninfo">Check details</Link>
            </div>
        </>
    )
}

export default WeatherBoxAirPollution