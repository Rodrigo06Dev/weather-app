import React, { useEffect, useState } from 'react'

import cleanSky from '../assets/cleanSky.mp4'
import nigth from '../assets/nigth.mp4'
import fewClouds from '../assets/fewClouds2.mp4'
import fewCloudsNigth from '../assets/fewClouds_nigth.mp4'
import showerRain from '../assets/showerRain.mp4'
import thunderStorm from '../assets/thunderstorm.mp4'
import snow from '../assets/snow.mp4'
import mist from '../assets/niebla.mp4'
import other from '../assets/other.mp4'





const Video = ({description}) => {
    const fecha = new Date(); 
    const hora = fecha.getHours();
    const [backGround, setBackGround] = useState()
    
    useEffect(() => {
        description == 'Clear' && (hora > 7) && (hora <= 17) ?
        setBackGround(cleanSky)
        :
        description == 'Clear' && (hora < 7 || hora > 17) ?
        setBackGround(nigth)
        :
        (description == 'Clouds') && (hora > 7) && (hora <= 17) ?
        setBackGround(fewClouds)
        :
        (description == 'Clouds') && (hora < 7 || hora > 17)  ?
        setBackGround(fewCloudsNigth)
        :
        description === 'Rain'?
        setBackGround(showerRain)
        :
        description === 'Thunderstorm' ?
        setBackGround(thunderStorm)
        :
        description === 'Mist' ?
        setBackGround(mist)
        :
        description === 'Snow' ?
        setBackGround(snow)
        :
        setBackGround(other)
    }, [backGround])
console.log(backGround);
  return (
    <video className='App__bgvideo' autoPlay loop muted> 
        <source src={backGround} alt='video/mp4'/>
    </video>
  )
}

export default Video