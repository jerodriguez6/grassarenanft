import React from "react";
import privacidad from "../images/LORE.pdf"

export default function Help() {
    return (
       
      
                    <div style={{margin:"50px 0px 0px 0px"}} className="col-md-4 col-lg-4 Help">
                        <h3 >HELP</h3>
                        <ul >
                            <li  style={{ padding:"5px 0px", listStyle:"none"}}>
                               <a style={{color: "white",  textDecoration: "none",  fontSize:"140%",fontFamily: 'axehandelregular',padding:"0px 20px"}}  href="#aboutUs">ABOUT</a>
                            </li>
                            <li style={{ padding:"5px 0px", listStyle:"none"}}>
                                <a  style={{color: "white",  textDecoration: "none", fontSize:"140%",fontFamily: 'axehandelregular',padding:"0px 20px"}}  href="#burger">NFT</a>
                            </li>
                            <li style={{ padding:"5px 0px", listStyle:"none"}}>
                                <a style={{color: "white",  textDecoration: "none",  fontSize:"140%",fontFamily: 'axehandelregular',padding:"0px 20px"}}  href="#roadMap">ROADMAP</a>
                            </li>
                            <li style={{ padding:"5px 0px", listStyle:"none"}}>
                                <a style={{color: "white",  textDecoration: "none",  fontSize:"140%",fontFamily: 'axehandelregular',padding:"0px 20px"}}  href="#Team">TEAM</a>
                            </li>
                            <li style={{ padding:"5px 0px", listStyle:"none"}}>              
                                <a  style={{color: "white",  textDecoration: "none",  fontSize:"140%",fontFamily: 'axehandelregular',padding:"0px 20px"}} href={privacidad} rel="noreferrer" target="_blank">WHITEPAPER</a>
                            </li>
                            <li style={{ padding:"5px 0px", listStyle:"none"}}>
                                <a  style={{color: "white",  textDecoration: "none",  fontSize:"140%",fontFamily: 'axehandelregular',padding:"0px 20px"}}  href="#tokenomics">TOKENOMICS</a>
                            </li>
                            <li style={{ padding:"5px 0px", listStyle:"none"}}>
                                <a  style={{color: "white",  textDecoration: "none",  fontSize:"140%",fontFamily: 'axehandelregular',padding:"0px 20px"}}  href="mailto:CryptoMcSoporte@hotmail.com">SUPPORT: grassarenanft@gmail.com</a>
                            </li>
                       
                       
                        </ul>
                   
            </div>
   
    )
}
