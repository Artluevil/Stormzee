import React from 'react';
import { useSelector } from 'react-redux'
import { selectDataCurrent, selectDataForecast, selectLoading } from '../weatherSlice';

function WeatherBoxMain() {

    const dataCurrent = useSelector(selectDataCurrent)
    const dataForecast = useSelector(selectDataForecast)
    const isLoading = useSelector(selectLoading)

    return (
        <>
            <div className="weather-main-box-wrapper">
                {isLoading ? <p>Loading...</p> : 
                <div>
                    <div className="weather-main-box-container">
                        <h2 className="weather-main-box-name">{dataCurrent.data.location.name} Weather</h2>
                        <p className="weather-main-box-location">{dataCurrent.data.location.country}</p>
                        <p className="weather-main-box-temperature">{dataCurrent.data.current.temp_c}°</p>
                        <p className="weather-main-box-condition">{dataCurrent.data.current.condition.text}</p>
                        <p className="weather-main-box-update">Last update: {dataCurrent.data.current.last_updated}</p>
                        <div className="weather-main-box-icon">
                            <img src={dataCurrent.data.current.condition.icon} />
                            <div className="weather-main-box-minmax-container">
                                <p className="weather-main-box-max">Max: {dataForecast.data.forecast.forecastday[0].day.maxtemp_c}°</p>
                                <p className="weather-main-box-min">Min: {dataForecast.data.forecast.forecastday[0].day.mintemp_c}°</p>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default WeatherBoxMain