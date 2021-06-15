import React from 'react';
import { Weather } from './features/weather/Weather'
import WeatherSearchEngine from './features/weather/components/WeatherSearchEngine'
import WeatherPollutionInfo from './features/weather/components/WeatherPollutionInfo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  // const [dataWeather, setDataWeather] = useState([])
  // const [isLoaded, setIsLoaded] = useState(false)
  // const [error, setError] = useState(null)
  // //"http://api.weatherapi.com/v1/current.json?q=Poland"

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoaded(false)
  //     const result = await axios(
  //       "http://api.weatherapi.com/v1/current.json?q=Poland",  {
  //         params: {
  //           key: '7575329f1b3841369b8101923210306'
  //         }
  //       }
  //     )
  //     console.log(result.data)
  //     setDataWeather(result.data)
  //     setIsLoaded(true)
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <div className="App">
            <WeatherSearchEngine />
            <Weather />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
