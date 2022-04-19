import Cheese from "../images/PORTAFOLIO.webp"
import { Parallax } from "react-parallax";
import Slider2 from "../components/Sliderv2";
import fila from "../images/fila.png"



export function Burger() {

    return (
        <div className="Burger" id="burger">

            
        <img src={fila} className="cajitafila rounded mx-auto d-block" alt="" />
        <Parallax className="cheese" bgImage={Cheese} strength={700}>
        <div className="Burger-Title">
            <h1>NFT<br/>COLLECTION</h1>
        </div>
            <Slider2/>
        </Parallax>
        
        </div>

    )
}