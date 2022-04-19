
import './App.css';
import { AboutUs } from './sections/AboutUs';
import { Banner } from './sections/Banner';
import { Burger } from './sections/Burgers';
import Footer from './sections/Footer';
import { Navbar } from './sections/Navbar';
import Roadmap from './sections/Roadmap';
import Team from './sections/Team';
import { Tokenomics } from './sections/Tokenomics';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Burger/>
      <Roadmap/>
      <Tokenomics/>
      <AboutUs/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
