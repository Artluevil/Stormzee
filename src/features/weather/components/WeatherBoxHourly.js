import React from 'react';
import { selectDataAll, selectDataForecast } from '../weatherSlice'
import { useSelector } from 'react-redux'

function WeatherBoxHourly() {

    const dataHourly = useSelector(selectDataAll)
    const dataForcast = useSelector(selectDataForecast)

    function toCelsius(val) {
        const result = Math.round((val - 32) * 0.5556)
        return result
    }

    return (
        <>
            <div className="weather-box-hourly-container">
                <h2>Tommorow Forecast for {dataForcast.data.location.name}</h2>
                <div className="weather-box-hourly-wrapper">
                    <div className="weather-box-hourly-morning">
                        <p className="weather-box-hourly-morning-time-of-day">Morning</p>
                        <p className="weather-box-hourly-morning-temperature">{Math.round(dataHourly.data.hourly[14].temp)}°</p>
                        <img src={"http://openweathermap.org/img/wn/" + dataHourly.data.hourly[14].weather[0].icon + "@2x.png"}/>
                        <p className="weather-box-hourly-morning-humidity-name">Humidity</p>
                        <p className="weather-box-hourly-morning-humidity">{dataHourly.data.hourly[14].humidity}%</p>
                    </div>
                    <div className="weather-box-hourly-afternoon">
                        <p className="weather-box-hourly-morning-time-of-day">Afternoon</p>
                        <p className="weather-box-hourly-morning-temperature">{Math.round(dataHourly.data.hourly[20].temp)}°</p>
                        <img src={"http://openweathermap.org/img/wn/" + dataHourly.data.hourly[20].weather[0].icon + "@2x.png"}/>
                        <p className="weather-box-hourly-morning-humidity-name">Humidity</p>
                        <p className="weather-box-hourly-morning-humidity">{dataHourly.data.hourly[20].humidity}%</p>
                    </div>
                    <div className="weather-box-hourly-evening">
                        <p className="weather-box-hourly-morning-time-of-day">Evening</p>
                        <p className="weather-box-hourly-morning-temperature">{Math.round(dataHourly.data.hourly[27].temp)}°</p>
                        <img src={"http://openweathermap.org/img/wn/" + dataHourly.data.hourly[27].weather[0].icon + "@2x.png"}/>
                        <p className="weather-box-hourly-morning-humidity-name">Humidity</p>
                        <p className="weather-box-hourly-morning-humidity">{dataHourly.data.hourly[27].humidity}%</p>
                    </div>
                    <div className="weather-box-hourly-overnight">
                        <p className="weather-box-hourly-morning-time-of-day">Overnight</p>
                        <p className="weather-box-hourly-morning-temperature">{Math.round(dataHourly.data.hourly[31].temp)}°</p>
                        <img src={"http://openweathermap.org/img/wn/" + dataHourly.data.hourly[31].weather[0].icon + "@2x.png"}/>
                        <p className="weather-box-hourly-morning-humidity-name">Humidity</p>
                        <p className="weather-box-hourly-morning-humidity">{dataHourly.data.hourly[31].humidity}%</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherBoxHourly