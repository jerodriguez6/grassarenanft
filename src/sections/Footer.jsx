import React, { Component } from "react";
import Help from "../components/Help";
import About from "../components/About";
import Comming from "../components/Comming";
import Privacy from "../components/Privacy"

export default function Footer() {
    return (
        <section className="Footer">
            <div className='container'>
                 <div className="row">
                    <Help/>
                    <About/>
                    <Comming/>
                    <Privacy/>
                </div>
             </div>
             <div>
                
             </div>
        </section>
    )
}
