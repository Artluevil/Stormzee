import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const WeatherPollutionCard = (props) => {

    const { particle, name } = props

    function getAverageValue(value) {
        if(name === "PM2_5 (Particulates smaller than 2.5 microns)") {
            const PM2_5val = Math.round(value * 2)
            return PM2_5val
        } else if(name === "PM10 (Particulates smaller than 10 microns)") {
            const PM10val = Math.round(value / 1.6)
            return PM10val
        } else if(name === "CO (Carbon monoxide)"){
            const CO2val = Math.round(value / 80)
            return CO2val
        }else if(name === "NO (Nitric oxide)"){
            const NOval = Math.round(value * 10)
            return NOval
        }else if(name === "NO2 (Nitrogen Dioxide)"){
            const NO2val = Math.round(value / 1.2)
            return NO2val
        }else if(name === "SO2 (Sulfur Dioxide)"){
            const SO2val = Math.round(value / 2)
            return SO2val
        }else if(name === "O3 (Ozone)"){
            const O3val = Math.round(value / 3)
            return O3val
        }else if(name === "NH3 (Azane)"){
            const NH3val = Math.round(value * 2)
            return NH3val
        }else {
            return value
        }
    }

    return(
        <>
        <div className="weather-pollution-info-graph-wrapper">
            <div className="weather-pollution-info-graph" style={{ width: 100, height: 100 }}>
                <CircularProgressbar 
                    strokeWidth={10} 
                    maxValue={300} 
                    text={getAverageValue(particle)} 
                    value={getAverageValue(particle)}
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
            <div className="weather-pollution-info-text">
                <p>{name}</p>
                <p>{particle}μg/m3</p>
            </div>
        </div>
        </>
    )
}

export default WeatherPollutionCard