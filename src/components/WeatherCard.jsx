import React, { useState } from 'react'
import '../styles/weatherCard.css'
import { BiWind } from 'react-icons/bi';
import { BsFillCloudsFill } from 'react-icons/bs';
import { BsArrowsAngleContract } from 'react-icons/bs';
//----------------importacion de los videos para back Ground---------------
import cleanSky from '../assets/cleanSky.mp4'
import nigth from '../assets/nigth.mp4'
import fewClouds from '../assets/fewClouds.mp4'
import fewCloudsNigth from '../assets/fewClouds_nigth.mp4'
import showerRain from '../assets/showerRain.mp4'
import thunderStorm from '../assets/thunderStorm.mp4'
import snow from '../assets/snow.mp4'
import mist from '../assets/niebla.mp4'

const WeatherCards = ({weather, temperature}) => {
  
  const [isCelsius, setIsCelsius] = useState(true)
  const changeTemperature = () => setIsCelsius(!isCelsius)  
  const description = (weather?.weather[0].main)
  console.log(weather);
 

  const fecha = new Date(); 
  const hora = fecha.getHours();
  console.log(hora);





  return (
    <article className='card'>
        <video className='App__bgvideo' autoPlay loop muted> 
        <source src={
          description === 'clear sky' && (hora > 7) && (hora < 17) ?
          cleanSky
          :
          description === 'clear sky' && (hora < 7 || hora > 17) ?
          nigth
          :
          (description === 'Clouds') && (hora > 7) && (hora < 17) ?
          fewClouds
          :
          (description === 'Clouds') && (hora < 7 || hora > 17)  ?
          fewCloudsNigth
          :
          description === 'Rain'?
          showerRain
          :
          description === 'Thunderstorm' ?
          thunderStorm
          :
          description === 'Mist' ?
          mist
          :
          snow        
          } alt='video/mp4'/>
        </video>
        <h1 className='card__title'>Weater App</h1>
        <h2 className='card__subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>

        <section className='card__first-section'>
          <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />

        </section>

        <section className='card__second-section'>
          <h3 className='second__title'>{weather?.weather[0].description}</h3>
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