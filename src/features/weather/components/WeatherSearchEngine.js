import React, { useState } from 'react';
import Logo from '../../../images/logo.png'
import SearchIcon from '../../../images/search-icon.png'
import CloseIcon from '../../../images/close.png'
import citiesData from '../../../data/cities.json'
import { setCityClicked, setTimeOfDay } from '../weatherSlice'
import { useDispatch } from 'react-redux'
import SkyMorning from '../../../images/sky-morning.png'
import SkyAfternoon from '../../../images/sky-afternoon.png'
import SkyEvening from '../../../images/sky-evening.png'
import SkyOvernight from '../../../images/sky-overnight.png'

function WeatherSearchEngine() {

    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    function handleSuggestions(e) {
        let userInput = e.toLowerCase()
        setSearchValue(userInput)
    }

    function displaySuggestion() {
        const dataSuggestions = []
        if (searchValue.length > 1) {
            citiesData.map(city => {
                if(city.name.substring(0, searchValue.length).toLowerCase() === searchValue) {
                    if(dataSuggestions.includes(city.name) === false) {
                        if(dataSuggestions.length < 10) {
                            dataSuggestions.push([city.name, city.lat, city.lng])
                        }
                    }
                }
            })
        }
        return dataSuggestions
    }

    function handleCityClick(city) {
        dispatch(setCityClicked(city))
        setSearchValue('')
    }

    const dataSuggestions = displaySuggestion()

    function handleStyle() {
        if(dataSuggestions.length > 0) {
           return {visibility: 'visible'}
        } else {
            return {visibility: 'hidden'}
        }
    }

    function handleCloseSuggestions() {
        setSearchValue('')
    }

    function getBackgroundImg() {
        let d = new Date()
        let currentHour = d.getHours()
        if(currentHour >= 4 && currentHour < 9) {
            dispatch(setTimeOfDay('morning'))
            return SkyMorning
        } else if(currentHour >= 9 && currentHour < 18) {
            dispatch(setTimeOfDay('afternoon'))
            return SkyAfternoon
        } else if(currentHour >= 18 && currentHour < 22) {
            dispatch(setTimeOfDay('evening'))
            return SkyEvening
        } else {
            dispatch(setTimeOfDay('overnight'))
            return SkyOvernight
        }
    }

    return (<div className="search-container" style={{backgroundImage: 'url(' + getBackgroundImg() + ')'}}>
        
            <div className="navigation">
                <div className="logo-container">
                    <img src={Logo} alt="stormzee logo"/>
                    <p className="website-name">Stromzee</p>
                </div>
            </div>
            <div className="search-engine">
                <div className="input-wrapper">
                    <img className="search-icon" src={SearchIcon} alt="search icon"/>
                    <input onChange={(e) => handleSuggestions(e.target.value)} value={searchValue} type="text" className="search-engine-input"></input>
                    <img className="close-icon" src={CloseIcon} style={handleStyle()} onClick={handleCloseSuggestions} alt="close icon"/>
                </div>
                <div className="search-suggestion-container">
                    {dataSuggestions.map(city => (
                        <div className="search-suggestion">
                            <p onClick={() => handleCityClick(city)}>{city[0]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WeatherSearchEngine