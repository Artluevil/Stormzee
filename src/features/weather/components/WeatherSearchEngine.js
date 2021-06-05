import React from 'react';
import Logo from '../../../images/logo.png'

function WeatherSearchEngine() {
    return (
        <div className="search-container">
            <div className="navigation">
                <a>Link1</a>
                <div className="logo-container">
                    <img src={Logo}/>
                    <p className="website-name">Stromzee</p>
                </div>
                <a>Link2</a>
            </div>
            <div className="search-engine">
                <input type="text" className="search-engine-input"></input>
            </div>
        </div>
    )
}

export default WeatherSearchEngine