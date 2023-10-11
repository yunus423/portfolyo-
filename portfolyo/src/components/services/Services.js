import React from 'react'
import '../../components/services/services.css'
import heartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../card/Card'
import Resume from './cv.pdf'
const Services = () => {
  return (
    <div className='services'>
      <div className='awesome'> 
      <span>My Awesome</span>
      <span>services</span>
      <span>
      Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz.
      <br/>
      Lorem Ipsum pasajlarının birçok çeşitlemesi vardır.
      </span>
      <a href={Resume} download>
      <button className='button s-button'>download CW</button>
      </a>
      <div className='blur s-blur1 c' style={{background:'#ABF1FF94'}}></div>
      </div>
      <div className='cards'>
 <div style={{left:'14rem'}}> 
    <Card emoji={heartEmoji} heading={"Design"} detail={"Figma,Sketch,Photoshop,,Adobe"}/>
 </div>
 <div style={{left:'-4rem', top:'12rem'}}> 
    <Card emoji={Glasses} heading={"Developer"} detail={"html,css,javascript,react"}/>
 </div>
 <div style={{left:'12rem', top:'19rem'}}> 
    <Card emoji={Humble} heading={"UI/UX"} detail={"türkiyenin en büyügü galatasaray"}/>

 </div>
 <div className='blur s-blur2 c' style={{background:'var(--purple)'}}></div>
      </div>

    </div>
    
  )
}

export default Services