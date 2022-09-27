import React, { useState } from 'react'
import '../styles/weatherCard.css'
import { BiWind } from 'react-icons/bi';
import { BsFillCloudsFill } from 'react-icons/bs';
import { BsArrowsAngleContract } from 'react-icons/bs';
import Video from './Video';

const WeatherCards = ({ weather, temperature, temperMin, temperMax }) => {

  const [isCelsius, setIsCelsius] = useState(true)
  const changeTemperature = () => setIsCelsius(!isCelsius)
  console.log(weather);

  return (
    <article className='card'>
      <Video description={weather?.weather[0].main} />

      <h1 className='card__title'>Weater App</h1>
      <h2 className='card__subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>      
      <section className='card__first-section'>
        <h2 className='first-section__tempMin'><span>Min</span>{isCelsius ? `${temperMin?.celMin} °C` : `${temperMin?.farMin} °f`}</h2>
        <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        <h2 className='first-section__tempMax'><span>Max</span>{isCelsius ? `${temperMax?.celMax} °C` : `${temperMax?.farMax} °f`}</h2>
      </section>

      <section className='card__second-section'>
        <h3 className='second__title'>{`${weather?.weather[0].description}.`.toUpperCase()}</h3>
        <ul className='second__list'>
          <li className='second__item'><span className='second__span'><BiWind /> Wind Speed</span> {weather?.wind.speed} m/s</li>
          <li className='second__item'><span className='second__span'><BsFillCloudsFill /> Clouds</span> {weather?.clouds.all}%</li>
          <li className='second__item'><span className='second__span'><BsArrowsAngleContract /> Presure</span> {weather?.main.pressure} hPA</li>
        </ul>
      </section>
      <h2 className='card__temperature'>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °f`}</h2>
      <button className='card__btn' onClick={changeTemperature}>{isCelsius ? 'Change to °f' : 'Change to °C'}</button>
    </article>

  )
}

export default WeatherCards