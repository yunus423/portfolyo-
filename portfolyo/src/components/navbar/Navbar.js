import React from 'react'
import '../../components/navbar/navbar.css'
import Toogle from '../toogle/Toogle'
const Navbar = () => {
  return (
<div className='n-wrapper'>
    <div className='n-left'>
        <div className='n-name'>Andrew</div> 
     <Toogle/>
    </div>
    <div className='n-right'>
        <div className='n-list'>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testimonials</li>

            </ul>
        </div>
        <button className='button n-button'>Contact </button>
    </div>
</div>
  )
}

export default Navbar