import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWeatherDataCurrent, setWeatherDataForecast, dataLoading, selectDataCurrent, selectCityClicked, setWeatherDataPollution, setWeatherDataAll, selectLoading} from './weatherSlice';
import axios from 'axios';
import WeatherBoxMain from './components/WeatherBoxMain'
import WeatherBoxAirPollution from './components/WeatherBoxAirPollution'
import WeatherPollutionInfo from './components/WeatherPollutionInfo'
import WeatherBoxHourly from './components/WeatherBoxHourly'
import WeatherBoxToday from './components/WeatherBoxToday'
import WeatherBoxDaily from './components/WeatherBoxDaily'
import './styles/styles.css'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export function Weather() {
    const dispatch = useDispatch()
    const dataWeatherCurrent = useSelector(selectDataCurrent)
    const isLoading = useSelector(selectLoading)
    const cityClicked = useSelector(selectCityClicked)


    //"http://api.weatherapi.com/v1/current.json?q=Poland"

    useEffect(() => {
        let dataCurrentKey = "http://api.weatherapi.com/v1/current.json"
        let dataForecastKey = "http://api.weatherapi.com/v1/forecast.json"
        let dataPollutionKey = "http://api.openweathermap.org/data/2.5/air_pollution"
        let dataAllKey = "https://api.openweathermap.org/data/2.5/onecall"

        const requestDataCurrent = axios.get(dataCurrentKey, {params: {
            key: '7575329f1b3841369b8101923210306',
            q: cityClicked[0]
        }})
        const requestDataForecast = axios.get(dataForecastKey, {params: {
            key: '7575329f1b3841369b8101923210306',
            q: cityClicked[0]
        }})
        const requestDataPollution = axios.get(dataPollutionKey, {params: {
            appid: "9d8a71734cdb32630565574258f3eb19",
            lat: cityClicked[1],
            lon: cityClicked[2]
        }})

        const requestDataAll = axios.get(dataAllKey, {params: {
            appid: "9d8a71734cdb32630565574258f3eb19",
            lat: cityClicked[1],
            lon: cityClicked[2],
            units: "metric",
        }})

        axios.all([requestDataCurrent, requestDataForecast, requestDataPollution, requestDataAll]).then(axios.spread((...response) => {
            dispatch(setWeatherDataCurrent(response[0]))
            dispatch(setWeatherDataForecast(response[1]))
            dispatch(setWeatherDataPollution(response[2]))
            dispatch(setWeatherDataAll(response[3]))
            dispatch(dataLoading(false))
        }))

        // const fetchDataCurrent = async () => {
        //     dispatch(dataLoading(true))
        //     const result = await axios(
        //         "http://api.weatherapi.com/v1/current.json",  {
        //         params: {
        //             key: '7575329f1b3841369b8101923210306',
        //             q: cityClicked
        //         }
        //         }
        //     )
        //     setLocationLat(result.data.location.lat)
        //     setLocationLon(result.data.location.lon)
        //     dispatch(setWeatherDataCurrent(result.data))
        //     }
        // fetchDataCurrent()
        // const fetchDataForecast = async () => {
        //     const result = await axios(
        //         "http://api.weatherapi.com/v1/forecast.json",  {
        //         params: {
        //             key: '7575329f1b3841369b8101923210306',
        //             q: cityClicked
        //         }
        //         }
        //     )
        //     dispatch(setWeatherDataForecast(result.data))

        //     }
        // fetchDataForecast()
        // //"http://api.openweathermap.org/data/2.5/air_pollution?lat=${"+ locationLat +"}&lon=${" + locationLon + "}&appid={a5851b3697bb1b623130df93855c3404}"
        // const fetchDataPollution = async () => {
        //     const result = await axios(
        //         "http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=9d8a71734cdb32630565574258f3eb19"
        //     )
        //     console.log(result.data)
        //     dispatch(setWeatherDataPollution(result.data))
        //     dispatch(dataLoading(false))
        //     }
        // fetchDataPollution()
    }, [cityClicked])

    return (
        <>
            <Router>
                {isLoading ? <p>Loading...</p> :
                    <Switch>
                        <Route exact path="/">
                            <div className="first-row">
                                <WeatherBoxMain />
                                <WeatherBoxAirPollution />
                            </div>
                            <div className="second-row">
                                <WeatherBoxHourly />
                            </div>
                            <div className="third-row">
                                <WeatherBoxToday />
                            </div>
                            <div className="fourth-row">
                                <WeatherBoxDaily />
                            </div>
                        </Route>
                        <Route exact path="/pollutioninfo">
                            <WeatherPollutionInfo />
                        </Route>
                    </Switch>}
            </Router>
        </>
    )
}