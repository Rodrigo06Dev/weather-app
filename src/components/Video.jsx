import React, { useEffect} from 'react'

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
    
    
    const handlebackGround = () => {
        let backGround = ''
            description == 'Clear' && (hora > 7) && (hora <= 17) ?
            backGround = cleanSky
            :
            description == 'Clear' && (hora < 7 || hora > 17) ?
            backGround = nigth
            :
            (description == 'Clouds') && (hora > 7) && (hora <= 17) ?
            backGround = fewClouds
            :
            (description == 'Clouds') && (hora < 7 || hora > 17)  ?
            backGround = fewCloudsNigth
            :
            description === 'Rain'?
            backGround = showerRain
            :
            description === 'Thunderstorm' ?
            backGround = thunderStorm
            :
            description === 'Mist' ?
            backGround = mist
            :
            description === 'Snow' ?
            backGround = snow
            :
            backGround = other
            console.log(`dentro de la funcion ${backGround}`);
        return backGround
    }
    
    return (
    <video className='App__bgvideo' autoPlay loop muted> 
        <source src={handlebackGround()} alt='video/mp4'/>
    </video>
    )
}

export default Video