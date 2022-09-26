import React from 'react'
import sun from '../assets/sun.gif'
import moon from '../assets/moon.gif'
import '../styles/loading.css'

const Loading = () => {
  //get time exact
  const fecha = new Date(); 
  const hora = fecha.getHours();

  
  return (
    <div className = {`loading ${hora > 8 && hora < 19 ? 'afternoon' : 'night'}`}>
      <div className='loading__image'>
        <img 
          src={
            hora > 8 && hora < 19 ?
            sun:
            moon
          }>
        </img>
      </div>
      <h1 className={hora > 8 && hora < 19 ? 'txt_afternoon' : 'txt_night'}>Loading...</h1>    
    </div>
  )
}

export default Loading