import  { useContext } from 'react'
import '../../components/toogle/toogle.css'
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { themeContext } from '../../Context';

const Toogle = () => {
    const theme =useContext(themeContext)
    const darkMode =theme.state.darkMode
 const handleClick=()=>{
    theme.dispatch({type :'toogle'})
 }

  return (


    <div className='toogle'  onClick={handleClick}>
        <BsMoon/>
        <BsSun/>
        <div className='t-button'  style={darkMode ? {left:'2px'} :{right:'2px'}}>

        </div>
    </div>
  )
}

export default Toogle