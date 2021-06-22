import React from 'react'
import '../stylings/inspiration.css'
import DemoCarousel from './DemoCarousel';
function Inspirations() {
    return (
        <div className="inspiration-container">
            <div className="inspiration-text1">
            work that is constant motivation for us
            </div>
            <div className="inspiration-text2" style={{marginBottom:'70px'}}>
            Inspirations
            </div>
            <DemoCarousel />
        </div>
    )
}

export default Inspirations
