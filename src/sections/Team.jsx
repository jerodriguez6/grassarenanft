import foto1 from "../images/Team/Team-1.jpeg"
import foto2 from "../images/Team/Team-2.jpeg"
import foto3 from "../images/Team/Team-3.jpeg"
import foto4 from "../images/Team/Team-4.jpeg"
import foto5 from "../images/Team/Team-5.jpeg"
import foto6 from "../images/Team/Team-6.jpeg"
import moztasa from "../images/botellacheddar.jpg"


export default function Team() {
    return (
        <section className="Team" id="Team">
            <img id="mustard-1" src={moztasa} alt="" />
            <img id="mustard-2" src={moztasa} alt="" />
            <div className="container">
                <div>
                     <h1>TEAM <br/>DEV</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 col-lg-3">
                        <h3>MARKETING</h3>
                        <img src={foto1} class="rounded mx-auto d-block" alt="" />
                        <p>MARCOS SANCHEZ<br/>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>DESIGNER</h3>
                        <img src={foto2} class="rounded mx-auto d-block" alt="" />
                        <p>JHOA GONZALEZ <br/>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>GAME DESIGNER</h3>
                        <img src={foto3} class="rounded mx-auto d-block" alt="" />
                        <p>JEFF<br/>
                        </p>

                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>WEB DEVELOPER</h3>
                        <img src={foto4} class="rounded mx-auto d-block" alt="" />
                        <p>JAMES RODRIGUEZ<br/>
                        <a href="https://www.linkedin.com/in/james-rodriguez-fonseca-a4195192/" rel="noreferrer" target="_blank">
                        <i class="fab fa-linkedin"></i></a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>ENVIRONMENT DESIGNER</h3>
                        <img src={foto5} class="rounded mx-auto d-block" alt="" />
                        <p>ALVARO DAYMARA<br/>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>CEO FOUNDER</h3>
                        <img src={foto6} class="rounded mx-auto d-block"  alt="" />
                        <p>FRAN DIEGO<br/>  
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
