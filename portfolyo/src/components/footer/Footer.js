import React from 'react'
import './footer.css'
import wave from '../../img/wave.png'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} alt='' style={{width:'100%'}}/>
        <div className='f-content'>
            <span>doganyunus@gmail.com</span>
            <div className='f-icons'>
                <BsInstagram className='icon'/>
                <BsFacebook className='icon'/>
                <BsGithub className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Footer