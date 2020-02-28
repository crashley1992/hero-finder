import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import SlideOne from './images/slide1.jpg'; 
import SlideTwo from './images/slide2.jpg'; 
import SlideThree from './images/slide3.jpg'; 
import './image-carousel-div.css';

const ImageCarouselDiv = () => {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SlideOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="slide-captions">Discover New Heroes</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SlideTwo}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h4 className="slide-captions">Find Awesome Comics</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SlideThree}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4 className="slide-captions">Learn About Your Favorite Heroes</h4>
          </Carousel.Caption>
        </Carousel.Item>
</Carousel>
    )
}

export default ImageCarouselDiv;