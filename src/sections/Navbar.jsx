
import navbar from "../images/Navbar.png"

import privacidad from "../images/LORE.pdf"


export function Navbar() {


    return (
        <section className="header">

            <div className="container" >
                <nav className="navbar container-flex" id="navbar">
                    <div className="container" id="brand">
                        <img src={navbar} alt="" />
                    </div>
                    <ul id="navlink" className="nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#banner">HOME</a>
                        </li>
                        <li className="nav-item" >
                            <a href="#aboutUs" className="nav-link">ABOUT US</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" href="#roadMap">ROADMAP</a>

                        </li>
                        
                        <li className="nav-item" >
                            <a href="#tokenomics" className="nav-link ">TOKENOMICS</a>
                        </li>

                        <li className="nav-item" >
                            <a href="#Team" className="nav-link ">TEAM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" rel="noreferrer"href={privacidad} target="_blank">WHITEPAPER</a>
                        </li>
                    </ul>
                </nav>
            </div>


            <div className="container-fluid fixed-bottom" id="movilnav">
                <nav className="navbar fixed-bottom">
                    <ul id="navlink" className="nav">
                        <li className="nav-item from-center">
                            <a className="nav-link active" aria-current="page" href="#banner">
                                <i className="fas fa-home"></i><br />
                                HOME
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutUs">
                            <i class="fas fa-candy-cane"></i><br />ABOUT US</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#roadMap">
                                <i className="fas fa-road"></i><br />

                                ROADMAP</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#Team">
                            <i class="fas fa-user-friends"></i><br />
                                TEAM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#tokenomics" ><i className="fas fa-chart-pie"></i><br />
                                TOKENOMICS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " rel="noreferrer" href={privacidad}>
                                <i className="fas fa-file-alt"></i><br />WHITEPAPER</a>
                        </li>
                    </ul>
                </nav>
            </div>


            <div className="container-fluid" id="movilnav">
                <nav className="navbar fixed-top">
                    <ul id="navlink" className="nav">
                        <li className="nav-item">
                            <div className="container" id="movilbrand">
                                <img src={navbar} alt="" />
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

        </section>
    )
}

