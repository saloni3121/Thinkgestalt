import React from 'react';
import '../stylings/WhyUs.css';
import WhyUsImg from '../images/Why us.png';
import Button from "@material-ui/core/Button";

function WhyUs() {
    return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={WhyUsImg} alt="whyUs"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <h4>WE CREATE, YOU THRIVE</h4>
                                <h1>WHY US ?</h1> 
                                <p>We're a full-service design agency for visionary organizations and products. We define, design and touch disruptive brand stationary and campaigns.</p>
                            </div>
                            <Button className="wwa-button-font-color">
                            Learn More&rarr;
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
