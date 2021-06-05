import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWeatherDataCurrent, setWeatherDataForecast, setWeatherDataPolution, dataLoading, selectDataCurrent, selectLoading, selectDataForecast } from './weatherSlice';
import Logo from '../../images/logo.png'
import axios from 'axios';
import WeatherBoxMain from './components/WeatherBoxMain'
import './styles/styles.css'


export function Weather() {
    const dispatch = useDispatch()
    const dataWeatherCurrent = useSelector(selectDataCurrent)
    const [locationLat, setLocationLat] = useState(50)
    const [locationLon, setLocationLon] = useState(50)


    //"http://api.weatherapi.com/v1/current.json?q=Poland"

    useEffect(() => {
        const fetchDataCurrent = async () => {
            dispatch(dataLoading(true))
            const result = await axios(
                "http://api.weatherapi.com/v1/current.json",  {
                params: {
                    key: '7575329f1b3841369b8101923210306',
                    q: 'Tarnobrzeg'
                }
                }
            )
            setLocationLat(result.data.location.lat)
            setLocationLon(result.data.location.lon)
            dispatch(setWeatherDataCurrent(result.data))
            }
        fetchDataCurrent()
        const fetchDataForecast = async () => {
            const result = await axios(
                "http://api.weatherapi.com/v1/forecast.json",  {
                params: {
                    key: '7575329f1b3841369b8101923210306',
                    q: 'Tarnobrzeg'
                }
                }
            )
            dispatch(setWeatherDataForecast(result.data))
            dispatch(dataLoading(false))
            }
        fetchDataForecast()
        //"http://api.openweathermap.org/data/2.5/air_pollution?lat=${"+ locationLat +"}&lon=${" + locationLon + "}&appid={a5851b3697bb1b623130df93855c3404}"
        // const fetchDataPolution = async () => {
        //     const result = await axios(
        //         "http://api.openweathermap.org/data/2.5/air_pollution?lat={50}&lon={50}&appid={9d8a71734cdb32630565574258f3eb19}"
        //     )
        //     console.log(result.data)
        //     dispatch(setWeatherDataPolution(result.data))
        //     dispatch(dataLoading(false))
        //     }
        // fetchDataPolution()
    }, [])

    return (
        <>
            <div>
                <WeatherBoxMain />
            </div>
        </>
    )
}