import React from 'react';
import HeroImg from '../images/Artwork.svg';
import Button from "@material-ui/core/Button";
import ExploreServices from './ExploreServices';
import '../stylings/Hero.css'

function Hero() {
    return (
        <div className = "container">
            <Button className="wwa-button-font-colour button_color">
            Learn More&rarr;
            </Button>
            <ExploreServices/>
            {/* <img src={HeroImg} alt=""/> */}
        </div>
    )
}

export default Hero
