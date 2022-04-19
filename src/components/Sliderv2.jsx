import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 } from "uuid";

import burger from "../images/Common.png";
import burger2 from "../images/Uncommon.png";
import burger3 from "../images/Rare.png";
import burger4 from "../images/Legendary.png";
import Slide from "./Slide";




export default class Slider2 extends Component {
    slides = [
        {
            key: v4(),
            content: (
                <Slide tittle= "Rarity" subtittle="LEGENDARY" imageShow= {burger}/>
            )

        },
        {
            key: v4(),
            content: (
                <Slide tittle= "Rarity" subtittle="MYTHICAL" imageShow= {burger2}/>
            )
        },
        {
            key: v4(),
            content: (
                <Slide tittle= "Rarity" subtittle="SUPER SPECIAL" imageShow= {burger3}/>
            )
        },
        {
            key: v4(),
            content: (
                <Slide tittle= "Rarity" subtittle="SPECIAL" imageShow= {burger3}/>
            )
        },
        {
            key: v4(),
            content: (
                <Slide tittle= "Rarity" subtittle="COMMON" imageShow= {burger3}/>
            )
        },
        {
            key: v4(),
            content: (
                <Slide tittle= "Home Made" subtittle="ARENA" imageShow= {burger4}/>
            )
        }

    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0
        });
    };

    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle,
        autoplay: true,
        autoplaySpeed: 2000
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <div className="Slider2Div">
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                    autoPlay
                    interval={this.state.autoplaySpeed}
                    infiniteLoop={true}
                    dynamicHeight={true}
                    ref={(slider) => (this.slider = slider)}
                    {...settings}
                ></Carousel>
            </div>
        );
    }
}