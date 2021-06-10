import React from 'react';
import { useSelector } from 'react-redux'
import { selectDataAll } from '../weatherSlice'

function WeatherBoxDaily() {

    function getDate() {
        let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            
            return year + '/' + month + '/' + date
    }

    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + ' ' + month + ' ' + year ;
        return time;
      }

    const dataAll = useSelector(selectDataAll)

    return (
        <>
            <div className="weather-box-daily-container">
                <h2>Weather daily</h2>
                <div className="weather-box-daily-wrapper">
                    <div className="weather-box-daily-0-conitainer">
                        <p className="weather-box-daily-day">Today</p>
                        <p className="weather-box-daily-temp-max">{Math.round(dataAll.data.daily[0].temp.max)}°</p>
                        <p className="weather-box-daily-temp-min">{Math.round(dataAll.data.daily[0].temp.min)}°</p>
                        <img src={"http://openweathermap.org/img/wn/" + dataAll.data.daily[0].weather[0].icon + "@2x.png"}/>
                        <p className="weather-box-daily-pressure-text">Pressure</p>
                        <p className="weather-box-daily-pressure-value">{dataAll.data.daily[0].pressure} mbar</p>
                    </div>
                    <div className="weather-box-daily-1-conitainer">
                        <p className="weather-box-daily-day">{timeConverter(dataAll.data.daily[1].dt)}</p>
                        <p className="weather-box-daily-temp-max">{Math.round(dataAll.data.daily[1].temp.max)}°</p>
                        <p className="weather-box-daily-temp-min">{Math.round(dataAll.data.daily[1].temp.min)}°</p>
                        <img src={"http://openweathermap.org/img/wn/" + dataAll.data.daily[1].weather[0].icon + "@2x.png"}/>
                        <p className="weather-box-daily-pressure-text">Pressure</p>
                        <p className="weather-box-daily-pressure-value">{dataAll.data.daily[1].pressure} mbar</p>
                    </div>
                    <div className="weather-box-daily-2-conitainer">
                        <p className="weather-box-daily-day">{timeConverter(dataAll.data.daily[2].dt)}</p>
                        <p className="weather-box-daily-temp-max">{Math.round(dataAll.data.daily[2].temp.max)}°</p>
                        <p className="weather-box-daily-temp-min">{Math.round(dataAll.data.daily[2].temp.min)}°</p>
                        <img src={"http://openweathermap.org/img/wn/" + dataAll.data.daily[2].weather[0].icon + "@2x.png"}/>
                        <p className="weather-box-daily-pressure-text">Pressure</p>
                        <p className="weather-box-daily-pressure-value">{dataAll.data.daily[2].pressure} mbar</p>
                    </div>
                    <div className="weather-box-daily-3-conitainer">
                        <p className="weather-box-daily-day">{timeConverter(dataAll.data.daily[3].dt)}</p>
                        <p className="weather-box-daily-temp-max">{Math.round(dataAll.data.daily[3].temp.max)}°</p>
                        <p className="weather-box-daily-temp-min">{Math.round(dataAll.data.daily[3].temp.min)}°</p>
                        <img src={"http://openweathermap.org/img/wn/" + dataAll.data.daily[3].weather[0].icon + "@2x.png"}/>
                        <p className="weather-box-daily-pressure-text">Pressure</p>
                        <p className="weather-box-daily-pressure-value">{dataAll.data.daily[3].pressure} mbar</p>
                    </div>
                    <div className="weather-box-daily-4-conitainer">
                        <p className="weather-box-daily-day">{timeConverter(dataAll.data.daily[4].dt)}</p>
                        <p className="weather-box-daily-temp-max">{Math.round(dataAll.data.daily[4].temp.max)}°</p>
                        <p className="weather-box-daily-temp-min">{Math.round(dataAll.data.daily[4].temp.min)}°</p>
                        <img src={"http://openweathermap.org/img/wn/" + dataAll.data.daily[4].weather[0].icon + "@2x.png"}/>
                        <p className="weather-box-daily-pressure-text">Pressure</p>
                        <p className="weather-box-daily-pressure-value">{dataAll.data.daily[4].pressure} mbar</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherBoxDaily