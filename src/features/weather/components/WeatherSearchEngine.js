import React, { useState } from 'react';
import Logo from '../../../images/logo.png'
import SearchIcon from '../../../images/search-icon.png'
import CloseIcon from '../../../images/close.png'
import citiesData from '../../../data/cities.json'
import { selectCityClicked, setCityClicked } from '../weatherSlice'
import { useDispatch } from 'react-redux'

function WeatherSearchEngine() {

    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [closeSuggestion, setCloseSuggestion] = useState(false)


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
                            dataSuggestions.push(city.name)
                        }
                    }
                }
            })
        }
        return dataSuggestions
    }

    function handleCityClick(city) {
        dispatch(setCityClicked(city))
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
                <div className="input-wrapper">
                    <img className="search-icon" src={SearchIcon}/>
                    <input onChange={(e) => handleSuggestions(e.target.value)} value={searchValue} type="text" className="search-engine-input"></input>
                    <img className="close-icon" src={CloseIcon} style={handleStyle()} onClick={handleCloseSuggestions}/>
                </div>
                <div className="search-suggestion-container">
                    {dataSuggestions.map(city => (
                        <div className="search-suggestion">
                            <p onClick={() => handleCityClick(city)}>{city}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WeatherSearchEngine