import React from "react";
import pancake from "../images/pancakeswap-cake-logo.png"
import binance from "../images/binance-logo-1.png"

export default function About() {
    return (


        <div style={{ margin: "50px 0px 0px 0px" }} className="col-md-4 col-lg-4 About ">
            <h3 >  SOCIAL NETWORKS AND SUPPORT</h3>

            <div>

                <a href="https://t.me/+vuGiczYC9WwxODk0" target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane"></i></a>
                <a href="https://mobile.twitter.com/GrassArenaNft" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://discord.gg/xvCkkDgAjn" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>             
                <a href="https://www.tiktok.com/@grassarenanft" target="_blank" rel="noreferrer"><i class="fab fa-tiktok"></i></a>
            </div>

            <div className="patrodiv">
            <img className="patro" src={pancake} alt="" />
            <img className="patro" src={binance} alt="" />
            </div>


        </div>

    )
}
