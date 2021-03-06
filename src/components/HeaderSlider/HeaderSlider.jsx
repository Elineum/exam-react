/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AppContext } from "../../context";

export const HeaderSlider = () => {
  const { filmData, imgData, getInfo, windowWidth } = useContext(AppContext);

  let fullInfo = [];
  filmData.map((item) => {
    fullInfo.push(item.id);
  });

  let settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  if (windowWidth > 1440) {
    settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  }
  if (windowWidth < 1024 && windowWidth >= 768) {
    settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  }
  if (windowWidth < 768) {
    settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  }

  return (
    <section className="page-head__film-block container">
      <Slider {...settings}>
        {filmData.map((item, ind) => {
          if (ind < 9) {
            return (
              <div
            className="page-head__film-box film-box"
            key={ind}
            data-id={item.id}
            onClick={getInfo}
          >
            <div className="page-head__image-wrap">
              <img src={imgData + item.poster} alt="poster" />
            </div>
            <div className="page-head__film-title">
              <h6>{item.orig_title}</h6>
            </div>
            <div className="page-head__film-text">
              <p>
                {typeof item.release == "string"
                  ? item.release.slice(0, 4)
                  : item.release}
                ,{" "}
                <span className="page-head__film-language">
                  {item.language}
                </span>
              </p>
            </div>
          </div>
            )
          } else return;
        })}
      </Slider>
    </section>
  );
};
