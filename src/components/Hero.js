import React from "react";
import HeroImg from "../images/Artwork.svg";
import Button from "@material-ui/core/Button";
import ExploreServices from "./ExploreServices";
import "../stylings/Hero.css";
import image from "../images/Design for future.png";

function Hero() {
  return (
    <div className="hero-container">
      {/* <Button className="wwa-button-font-colour button_color">
            Learn More&rarr;
            </Button> */}
      <div className="row">
        <div
          className="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="hero-text">Welcome to ThinkGestalt design</div>
          <div className="hero-heading">design for future</div>
        </div>
        <div className="col-md-6">
          <img src={image} className="img-fluid" />
        </div>
      </div>
      <div className="popular-services">
          Popular Services
      </div>
      <ExploreServices />
      {/* <img src={HeroImg} alt=""/> */}
    </div>
  );
}

export default Hero;
