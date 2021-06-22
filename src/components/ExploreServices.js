import React from 'react';
import Card from './Cards.js';
import '../stylings/ExploreServices.css'

function ExploreServices() {
    return (
        <div className="row service_container">
            <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                <Card/>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                <Card/>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                <Card/>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                <Card/>
            </div>
        </div>
    )
}

export default ExploreServices
