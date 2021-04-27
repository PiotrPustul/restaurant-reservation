import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slides = () => {
  return (
    <div className="slides">
      <Carousel showThumbs={false}>
        <div className="slides__slide">
          <div className="slide-img slide-img--first-slide" />
        </div>
        <div className="slides__slide ">
          <div className="slide-img slide-img--second-slide" />
        </div>
        <div className="slides__slide">
          <div className="slide-img slide-img--forth-slide" />
        </div>
      </Carousel>
    </div>
  )
}


export default Slides;