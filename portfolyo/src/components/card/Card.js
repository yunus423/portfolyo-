import React from 'react'
import '../../components/card/card.css'

const Card = ({heading,detail,emoji}) => {
  return (
 <div className='card'>
    <img src={emoji} alt=''/>
    <span>{heading}</span>
    <span >{detail}</span>
    <button className='c-button'>LEARN MORE</button>
 </div>
  )
}

export default Card