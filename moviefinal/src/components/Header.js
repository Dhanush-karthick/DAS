import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SlideOne from "./Assets/movie-still-3.jpeg";
import SlideTwo from "./Assets/movie-still-5.jpeg";
import SlideThree from "./Assets/movie-still-9.jpeg";
import SlideFour from "./Assets/movie-still-1.jpeg";
import SlideFive from "./Assets/movie-still-6.jpeg";
import SlideSix from "./Assets/movie-still-4.jpeg";
import SlideSeven from "./Assets/movie-still-8.jpeg";
import SlideEight from "./Assets/movie-still-7.jpeg";
import "./styles/caraousel.css";

// Page header with a rotating carousel
function Header() {
  return (
    <Carousel controls={true} indicators={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideOne}
          alt="First Slide"
        />
        <Carousel.Caption>
          <p>Everything Everywhere All at Once (2022)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={SlideTwo}
          alt="Second Slide"
        />
        <Carousel.Caption>
          <p>Nope (2022)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={SlideThree}
          alt="Third Slide"
        />
        <Carousel.Caption>
          <p>Dune (2021)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={SlideFour}
          alt="Fourth Slide"
        />
        <Carousel.Caption>
          <p>Everything Everywhere All at Once (2022)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={SlideFive}
          alt="Fifth Slide"
        />
        <Carousel.Caption>
          <p>Hereditary (2018)</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={SlideSix}
          alt="Sixth Slide"
        />
        <Carousel.Caption>
          <p>Nope (2022)</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={SlideSeven}
          alt="Seventh Slide"
        />
        <Carousel.Caption>
          <p>Dune (2021)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={SlideEight}
          alt="Eighth Slide"
        />
        <Carousel.Caption>
          <p>Hereditary (2018)</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
