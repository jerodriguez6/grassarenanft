import React from 'react'
import { Popover, OverlayTrigger } from "react-bootstrap";
import closeBox from "../images/Caja Bloqueada.png"
import redBox from "../images/redbox.png"
import openBox from "../images/openBox.jpg"

export default function RoadmapAnimationXL() {

    const changeBox = (e) => {
        if (!e.target.src.includes('open')) {
            e.target.src = openBox;
        } else {
            e.target.src = redBox;
        }

    }

    const popover0 = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Q1 2022</Popover.Header>
            <Popover.Body>
                <ul>
                    <li>Launch of the website.</li>
                    <li>Private sale.</li>
                    <li>IDO.</li>
                    <li>NFT presale.</li>
                    <li>AIRDROP.</li>
                    <li>Pancakeswap list.</li>
                </ul>
            </Popover.Body>
        </Popover>
    );
    const Popbox0 = () => (
        <OverlayTrigger trigger="click" rootClose placement="top" overlay={popover0}>
            <div className='container cajitaRoadmap' id='RoadBox0'>
                <div className='row'>
                    <div className='col-5'>
                        <img onClick={changeBox} src={redBox} alt="" />
                    </div>
                    <div className='col-7'>
                        <br/>
                        <h3 style={{color:"yellow"}}>Q1</h3>
                        <h3>2022</h3>
                    </div>    
                </div>
            </div>
            

        </OverlayTrigger>
    );



    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Q2 2022</Popover.Header>
            <Popover.Body>
                <ul>
                    <li>Audit.</li>
                    <li>Staking.</li>
                    <li>AIRDROP.</li>
                    <li>Marketplace.</li>
                    <li>Play to earn game.</li>
                    <li>Grants system.</li>
                </ul>
            </Popover.Body>
        </Popover>
    );

    const Popbox1 = () => (
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popover}>
            <div className='container cajitaRoadmap' id='RoadBox1'>
                <div className='row'>
                    <div className='col-5'>
                        <img  src={closeBox} alt="" />
                    </div>
                    <div className='col-7'>
                        <br/>
                        <h3 style={{color:"yellow"}}>Q2</h3>
                        <h3>2022</h3>
                    </div>    
                </div>
            </div>
        </OverlayTrigger>
    );

    const popover3 = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Q3 2023</Popover.Header>
            <Popover.Body>
                <ul>
                    <li>Implementation of new things.</li>
                    <li>Events.</li>
                    <li>Stake System.</li>
                    <li>Game modes.</li>
                </ul>
            </Popover.Body>
        </Popover>
    );
    const Popbox3 = () => (
        <OverlayTrigger trigger="click" rootClose placement="top" overlay={popover3}>
            <div className='container cajitaRoadmap' id='RoadBox3'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={closeBox} alt="" />
                    </div>
                    <div className='col-7'>
                        <br/>
                        <h3 style={{color:"yellow"}}>Q3</h3>
                        <h3>2023</h3>
                    </div>    
                </div>
            </div>
        </OverlayTrigger>
    );

    const popover5 = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Q4 2023</Popover.Header>
            <Popover.Body>
                <ul>
                    <li>GRASS ARENA tournaments.</li>
                    <li>Clans.</li>
                </ul>
            </Popover.Body>
        </Popover>
    );

    const Popbox5 = () => (
        <OverlayTrigger trigger="click" rootClose placement="left" overlay={popover5}>
            <div className='container cajitaRoadmap' id='RoadBox5'>
                <div className='row'>
                    <div className='col-8'>
                        <img src={closeBox} alt="" />
                    </div>
                    <div className='col-4'>
                        <br/>
                        <h3 style={{color:"yellow"}}>Q4</h3>
                        <h3>2023</h3>
                    </div>    
                </div>
            </div>
        </OverlayTrigger>
    );

    return (
        <div className="container topathXL">
            <div className="motoXL"></div>
            <Popbox0/>
            <Popbox1/>
            <Popbox3/>
            <Popbox5/>
        </div>
    )
}
