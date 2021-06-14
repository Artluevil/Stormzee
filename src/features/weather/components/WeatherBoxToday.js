import React from 'react';
import { useSelector } from 'react-redux'
import { selectDataForecast } from '../weatherSlice'
import ThermometerIcon from '../../../images/thermometer.png'
import WindIcon from '../../../images/wind.png'
import CloudIcon from '../../../images/cloud.png'
import PressureIcon from '../../../images/gauge.png'
import HumidityIcon from '../../../images/humidity.png'
import UvIcon from '../../../images/ultraviolet.png'
import VisibilityIcon from '../../../images/witness.png'
import MoonPhaseIcon from '../../../images/moon.png'

function WeatherBoxToday() {

    const dataForecast = useSelector(selectDataForecast)

    return (
        <>
            <div className="weather-box-today-container">
            <h2>Weather for today in {dataForecast.data.location.name}</h2>
            <div className="weather-box-today-temp-feelslike-container">
                    <div className="weather-box-today-temp-feelslike-text-container">
                        <p className="weather-box-today-temp-feelslike-temperature">{dataForecast.data.current.feelslike_c}°</p>
                        <p className="weather-box-today-temp-feelslike-text">Feels like</p>
                    </div>
                    <div className="weather-box-today-temp-feelslike-sunrise-container">
                        <p>Sunrise - {dataForecast.data.forecast.forecastday[0].astro.sunrise} / Sunset {dataForecast.data.forecast.forecastday[0].astro.sunset}</p>
                    </div>
                </div>
                <div className="weather-box-today-info-container">
                    <div className="weather-box-today-highlow-container">
                        <img src={ThermometerIcon} alt="thermometer icon"/>
                        <p>High / Low</p>
                        <p className="weather-box-today-value">{dataForecast.data.forecast.forecastday[0].day.maxtemp_c}°/{dataForecast.data.forecast.forecastday[0].day.mintemp_c}°</p>
                    </div>
                    <div className="weather-box-today-wind-container">
                        <img src={WindIcon} alt="wind icon"/>
                        <p>Wind</p>
                        <p className="weather-box-today-value">{dataForecast.data.current.wind_kph}km/h</p>
                    </div>
                    <div className="weather-box-today-humidity-container">
                        <img src={HumidityIcon} alt="humidity icon"/>
                        <p>Humidity</p>
                        <p className="weather-box-today-value">{dataForecast.data.current.humidity}%</p>
                    </div>
                    <div className="weather-box-today-cloud-container">
                        <img src={CloudIcon} alt="clound icon"/>
                        <p>Cloud</p>
                        <p className="weather-box-today-value">{dataForecast.data.current.cloud} / 100</p>
                    </div>
                    <div className="weather-box-today-pressure-container">
                        <img src={PressureIcon} alt="pressure icon"/>
                        <p>Pressure</p>
                        <p className="weather-box-today-value">{dataForecast.data.current.pressure_mb} mbar</p>
                    </div>
                    <div className="weather-box-today-uv-container">
                        <img src={UvIcon} alt="uv light icon"/>
                        <p>UV Index</p>
                        <p className="weather-box-today-value">{dataForecast.data.current.uv}/10</p>
                    </div>
                    <div className="weather-box-today-visibility-container">
                        <img src={VisibilityIcon} alt="visibility icon"/>
                        <p>Visibility</p>
                        <p className="weather-box-today-value">{dataForecast.data.current.vis_km} km</p>
                    </div>
                    <div className="weather-box-today-precipitation-container">
                        <img src={MoonPhaseIcon} alt="moon phase icon"/>
                        <p>Moon Phase</p>
                        <p className="weather-box-today-value">{dataForecast.data.forecast.forecastday[0].astro.moon_phase}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherBoxToday