
import { useContext } from 'react';
import './App.css';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimional from './components/testimıoanal/Testimional';
import Works from './components/works/Works';
import { themeContext } from './Context';

function App() {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="App"
    
    style={{background : darkMode ? 'black' : ' ',
   color:darkMode? 'white' : ' '
  }}
    >
<Navbar/>
<Intro/>
<Services/>
<Experience/>
<Works/>
<Portfolio/>
<Testimional/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
