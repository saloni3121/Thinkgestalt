
import inspiration1 from "../images/Inspirations/Inspirations 1.png";
import inspiration2 from "../images/Inspirations/Inspirations 2.png";
import inspiration3 from "../images/Inspirations/Inspirations 3.png";
import inspiration4 from "../images/Inspirations/Inspirations 4.png";
import Ogilvy from "../images/Case_studies/Ogilvy.png";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function DemoCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div style={{marginBottom:'50px'}}>
      <Carousel
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src={inspiration1} width="350px" height="300px" />
        </div>
        <div>
          <img src={inspiration2} width="350px" height="300px" />
        </div>
        <div>
          <img src={inspiration3} width="350px" height="300px" />
        </div>
        <div>
          <img src={inspiration4} width="350px" height="300px" />
        </div>
      </Carousel>
    </div>
  );
}

export default DemoCarousel;
