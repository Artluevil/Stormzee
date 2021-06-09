import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { selectDataPollution, selectDataCurrent } from '../weatherSlice'
import { useSelector } from 'react-redux'
import WeatherPollutionCard from './WeatherPollutionCard'

function WeatherPollutionInfo() {

    const dataPollution = useSelector(selectDataPollution)
    const dataCurrent = useSelector(selectDataCurrent)

    function getAverageValue(value) {
        const averageValue = Math.round(value * 2)
        return averageValue
    }

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
            <div className="weather-pollution-info-container">
                <div className="weather-pollution-info-dsc">
                    <p className="weather-pollution-info-air">Air quality today</p>
                    <p className="weather-pollution-info-name">{dataCurrent.data.location.name}/</p>
                    <p className="weather-pollution-info-country">{dataCurrent.data.location.country}</p>
                </div>
                <div className="weather-pollution-info-graph-container">
                    <div className="weather-pollution-info-graph" style={{ width: 100, height: 100 }}>
                        <CircularProgressbar 
                            strokeWidth={10} 
                            maxValue={300} 
                            text={`${getAverageValue(dataPollution.data.list[0].components.pm2_5)}`} 
                            value={getAverageValue(dataPollution.data.list[0].components.pm2_5)}
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
                    <div className="weather-pollution-info-graph-text">
                        <p className="weather-pollution-info-graph-text-index" style={{color: getAirQuality()[2]}}>{getAirQuality()[0]}</p>
                        <p className="weather-pollution-info-graph-text-description">{getAirQuality()[1]}</p>
                    </div>
                </div>
            </div>
            <div className="weather-pollution-all-info-container">
                <WeatherPollutionCard name="PM2_5 (Particulates smaller than 2.5 microns)" particle={dataPollution.data.list[0].components.pm2_5} />
                <WeatherPollutionCard name="PM10 (Particulates smaller than 10 microns)" particle={dataPollution.data.list[0].components.pm10} />
                <WeatherPollutionCard name="CO (Carbon monoxide)" particle={dataPollution.data.list[0].components.co} />
                <WeatherPollutionCard name="NO (Nitric oxide)" particle={dataPollution.data.list[0].components.no} />
                <WeatherPollutionCard name="NO2 (Nitrogen Dioxide)" particle={dataPollution.data.list[0].components.no2} />
                <WeatherPollutionCard name="O3 (Ozone)" particle={dataPollution.data.list[0].components.o3} />
                <WeatherPollutionCard name="SO2 (Sulfur Dioxide)" particle={dataPollution.data.list[0].components.so2} />
                <WeatherPollutionCard name="NH3 (Azane)" particle={dataPollution.data.list[0].components.nh3} />
            </div>
        </>
    )
}

export default WeatherPollutionInfo