import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        dataCurrent: [],
        dataForecast: [],
        dataPollution: [],
        dataAll: [],
        cityClicked: ['Warsaw', '52.22977', '21.01178'],
        timeOfDay: 'afternoon',
        isLoading: true
    },
    reducers: {
        setWeatherDataCurrent: (state, action) => {
            state.dataCurrent = action.payload
        },
        setWeatherDataForecast: (state, action) =>{
            state.dataForecast = action.payload
        },
        setWeatherDataPollution: (state, aciton) => {
            state.dataPollution = aciton.payload
        },
        setWeatherDataAll: (state, action) => {
            state.dataAll = action.payload
        },
        setCityClicked: (state, action) => {
            state.cityClicked = action.payload
        },
        setTimeOfDay: (state, action) => {
            state.timeOfDay = action.payload
        },
        dataLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const selectDataCurrent = (state) => state.weather.dataCurrent
export const selectDataForecast = (state) => state.weather.dataForecast
export const selectDataPollution = (state) => state.weather.dataPollution
export const selectDataAll = (state) => state.weather.dataAll
export const selectCityClicked = (state) => state.weather.cityClicked
export const selectTimeOfDay = (state) => state.weather.timeOfDay
export const selectLoading = (state) => state.weather.isLoading
export const { setWeatherDataCurrent, setWeatherDataForecast, setWeatherDataPollution, setWeatherDataAll, setCityClicked, dataLoading, setTimeOfDay } = weatherSlice.actions

export default weatherSlice.reducer