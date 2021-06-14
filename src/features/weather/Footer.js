import React from 'react';
import OpenWeatherLogo from '../../images/openweather-logo.png';
import WeatherApiLogo from '../../images/weatherapi-logo.png';
import GitHubLogo from '../../images/GitHub-logo.png'

function Footer() {
    return(
        <>
            <footer className="footer-container">
                <h2 className="footer-text1">Build with API</h2>
                <div className="logos-container">
                    <a href="https://www.weatherapi.com/" target="_blank" rel="noreferrer"><img className="weatherapi-logo" src={WeatherApiLogo} alt="weatherapi logo"/></a>
                    <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer"><img className="openweather-logo" src={OpenWeatherLogo} alt="openweather logo"/></a> 
                </div>
                <p className="footer-text2">This is test project, Use this data at your own risk</p>
                <p className="footer-text3">Build by Artluevil</p>
                <a href="https://github.com/Artluevil" target="_blank" rel="noreferrer"><img className="github-logo" src={GitHubLogo} alt="github logo"/></a>
            </footer>
        </>
    )
}

export default Footer