import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        dataCurrent: [],
        dataForecast: [],
        dataPolution: [],
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
        dataLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const selectDataCurrent = (state) => state.weather.dataCurrent
export const selectDataForecast = (state) => state.weather.dataForecast
export const selectDataPolution = (state) => state.weather.dataPolution
export const selectLoading = (state) => state.weather.isLoading
export const { setWeatherDataCurrent, setWeatherDataForecast, setWeatherDataPolution, dataLoading } = weatherSlice.actions

export default weatherSlice.reducer