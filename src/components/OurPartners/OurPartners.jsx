/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./OurPartners.scss";
import tourner from "../../partners-image/tourner.png";
import retro from "../../partners-image/retro.png";
import jameson from "../../partners-image/jameson.png";
import frank from "../../partners-image/frank.png";
import beats from "../../partners-image/beats.png";
import babble from "../../partners-image/babble.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AppContext } from "../../context";

const PARTNERS_LIST = [
  { url: tourner },
  { url: frank },
  { url: retro },
  { url: beats },
  { url: jameson },
  { url: babble },
  { url: tourner },
  { url: frank },
  { url: retro },
  { url: beats },
  { url: jameson },
  { url: tourner },
];

export const OurPartners = () => {
  const { windowWidth } = useContext(AppContext);

  let settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  if (windowWidth <= 768 && windowWidth > 320) {
    settings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  } else if (windowWidth <= 320) {
    settings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  }

  return (
    <section className="our-partners">
      <div className="our-partners__content container">
        <div className="our-partners__title-wrap">
          <h1>our partners</h1>
        </div>
        <div className="our-partners__span-wrap">
          <span></span>
        </div>
        <ul className="our-partners__list">
          <Slider {...settings}>
            {PARTNERS_LIST.map((item, index) => (
              <li className="our-partners__item" key={index}>
                <a href="#" className="our-partners__list-img-wrap">
                  <img src={item.url} alt="partners-logo" />
                </a>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </section>
  );
};
