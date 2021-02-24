import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../static/images/picture1.jpg';
import img2 from '../../static/images/picture2.jpg';
import img3 from '../../static/images/picture3.jpg';
import img4 from '../../static/images/picture4.jpg';

const Slides = () => {
  return (
    <div className="slides">
      <Carousel>
        <div className="slides__slide">
          <img src={img1} alt="Page" className="slide-img" />
        </div>
        <div className="slides__slide">
          <img src={img2} alt="Page" className="slide-img" />
        </div>
        <div className="slides__slide">
          <img src={img3} alt="Page" className="slide-img" />
        </div>
        <div className="slides__slide">
          <img src={img4} alt="Page" className="slide-img" />
        </div>
      </Carousel>
    </div>
  )
}


export default Slides;