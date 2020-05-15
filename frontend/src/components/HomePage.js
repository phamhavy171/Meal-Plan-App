import React from "react";
import "./HomePage.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="home">
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block mw-100 mx-auto "
              src="https://source.unsplash.com/pN-o2rIv8qI"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mw-100 mx-auto"
              src="https://source.unsplash.com/zH1Z5bPlUp0"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mw-100 mx-auto"
              src="https://source.unsplash.com/7BQC4h7wd9Y"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="banner-text">
        <h1>Healthy and balanced recipes are available at your quest</h1>
        <p>
          With over 2 million recipes from over 5000 top web recipe sources. No
          need for wondering what to cook for today.
        </p>
        <button>
          <Link
            to="./Filter"
            style={{ textDecoration: "none", color: "white" }}
          >
            Search now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
