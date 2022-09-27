import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'


function App() {
 
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperture, setTemperature] = useState()
  const [temperMin, setTemperMin] = useState()
  const [temperMax, setTemperMax] = useState()
  

  useEffect(() => {
    //funtion for add latidud y longitud
    const success = pos => {
      const objCoords = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(objCoords);
    }
    //peticion a la api del navegador para localizacion: longitude & latitude
    //request to browser api for location: longitude & latitude
    navigator.geolocation.getCurrentPosition(success)    
  }, [])

  //----------
 useEffect(() => {
  if (coords) {
    const APIKEY = 'd525bf9ba4dc021386cdd914506e58ee' 
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(URL)
    .then(res => {        
        const celsius = (res.data.main.temp - 273.15).toFixed(0)
        const farenheit = (celsius * 9 /5 + 32).toFixed(0)
        const celMin = (res.data.main.temp_min - 273.15).toFixed(0)
        const celMax = (res.data.main.temp_max - 273.15).toFixed(0)
        const farMin = (celMin * 9 /5 + 32).toFixed(0)
        const farMax = (celMax * 9 /5 + 32).toFixed(0)
        setTemperature({celsius, farenheit})
        setTemperMin({celMin, farMin})
        setTemperMax({celMax, farMax})
        setWeather(res.data)
      
      })        
    .catch(err => console.log(err))
  }   
 }, [coords])
 
 return (
  <div className="App">
    {
      weather ?
      <WeatherCard 
        weather={weather} 
        temperature={temperture} 
        temperMin = {temperMin} 
        temperMax = {temperMax}/>
      :
      <Loading />
    }
  </div>
  )
}

export default App
