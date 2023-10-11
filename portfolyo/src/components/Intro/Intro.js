import React from 'react'
import '../../components/Intro/Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instegram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import glasesimoji from '../../img/glassesimoji.png'
import crown from '../../img/crown.png'
import FloatingDiv from '../floatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
const Intro = () => {
  const transition={duration :2, type:'spring'}
  return (
<div className='intro'>


    <div className='i-left'>
        <div className='i-name'>
         <span>Hey! I am</span>
         <span>Yunus Doğan</span>
         <span>
            Galatasaray (futbol takımı), Galatasaray Spor Kulübü'nün Süper Lig'de mücadele eden futbol takımıdır.
        </span>

         </div>
         <button className=' button i-button'>Hire me</button>
         <div className='i-icon'>
      <img src={github} alt=''/>
      <img src={linkedin} alt=''/>
      <img src={instegram} alt=''/>
         </div>
         </div>
    <div className='i-right'>
      <img src={vector1} alt=''/>
      <img src={vector2} alt=''/>
      <img src={boy} alt=''/>
      <motion.img initial={{left:'-36%'}} whileInView={{left:'-24%'}} transition={transition} src={glasesimoji} alt=''/>
      <motion.div initial={{top:'-4%',left:'74%'}} whileInView={{left:'68%'}} transition={transition} style={{top:'-4% ', left:'68%'}}>
        <FloatingDiv image={crown} txt1="web" txt2="Developer"/>
      </motion.div>
      <motion.div initial={{top:'9%',left:'18%'}} whileInView={{left:'0%'}} transition={transition} style={{top:'18rem ', left:'0rem'}}>
        <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
      </motion.div>
      <div className='blur' style={{background:"rgb(238 210 255)" }}></div>
      <div className='blur' style={{background:"#C1F5FF", top:'17rem',width:'21rem', height:'11rem',left:'-9rem' }}></div>
    </div>
</div>

  )
}

export default Intro