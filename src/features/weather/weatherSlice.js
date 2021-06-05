import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        dataCurrent: [],
        dataForecast: [],
        dataPolution: [],
        cityClicked: 'Warsaw',
        isLoading: 'hello'
    },
    reducers: {
        setWeatherDataCurrent: (state, action) => {
            state.dataCurrent = action.payload
        },
        setWeatherDataForecast: (state, action) =>{
            state.dataForecast = action.payload
        },
        setWeatherDataPolution: (state, aciton) => {
            state.dataPolution = aciton.payload
        },
        setCityClicked: (state, action) => {
            state.cityClicked = action.payload
        },
        dataLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const selectDataCurrent = (state) => state.weather.dataCurrent
export const selectDataForecast = (state) => state.weather.dataForecast
export const selectDataPolution = (state) => state.weather.dataPolution
export const selectCityClicked = (state) => state.weather.cityClicked
export const selectLoading = (state) => state.weather.isLoading
export const { setWeatherDataCurrent, setWeatherDataForecast, setWeatherDataPolution, setCityClicked, dataLoading } = weatherSlice.actions

export default weatherSlice.reducer