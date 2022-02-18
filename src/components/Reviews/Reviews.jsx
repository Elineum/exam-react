import React from "react";
import "./Reviews.scss"
import sharon from "../../photo-image/sharon.jpg";
import jack from "../../photo-image/jack.jpg";
import kelly from "../../photo-image/kelly.jpg";
import harold from "../../photo-image/harold.jpg";
import samantha from "../../photo-image/samantha.jpg";
import albert from "../../photo-image/albert.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const COMMENTATORS = [
  {
    photo: sharon,
    name: "Sharon Willis",
    text: "One of the best online movie streaming services that I’ve seen! Thank you for the constant updates of your movies and TV shows catalog. I recommend MOOV to everyone!",
  },
  {
    photo: jack,
    name: "Jack Wilson",
    text: "My girlfriend recommended me this website and I’m actually quite surprised by the range of the movies and TV series they offer here. Even some of my personal favorites can be found on MOOV!",
  },
  {
    photo: kelly,
    name: "Kelly McMillan",
    text: "I’m a big fan of movies, especially of classic ones. I’ve been looking for a great movie website for quite a long time and MOOV has almost every movie I’m interested in. That’s great!",
  },
  {
    photo: harold,
    name: "Harold Barnett",
    text: "Sci-fi action movies and thrillers as well as the TV shows of the same genre are my true passion and MOOV has one of the greatest range of movies and TV series to offer. Thanks!",
  },
  {
    photo: samantha,
    name: "Samantha Lee",
    text: "The superhero and fantasy movies available at MOOV are exceptionally great! I’m finally able to watch all my favorites without having to pay more than I can allow.",
  },
  {
    photo: albert,
    name: "Albert Webb",
    text: "This website is incredible! It has not only top box office premieres but also other great movies as well as TV shows and series that I find awesome to watch and discuss with my friends.",
  },
];

export const Reviews = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="reviews">
      <div className="reviews__content container">
        <div className="reviews__title-wrap">
          <h1>reviews</h1>
        </div>
        <div className="reviews__span-wrap">
          <span></span>
        </div>
        <ul className="reviews__list">
          <Slider {...settings}>
            {COMMENTATORS.map((item, index) => (
              <li className="reviews__item" key={index}>
                <div className="reviews__image-wrap">
                  <img src={item.photo} alt="photo-reviewer" />
                </div>
                <div className="reviews__name">
                  <span>{item.name}</span>
                </div>
                <div className="reviews__text">
                  <q>{item.text}</q>
                </div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </section>
  );
};
