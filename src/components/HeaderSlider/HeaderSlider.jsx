import React, { useContext } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AppContext } from "../../context";

export const HeaderSlider = () => {
    const { filmData, imgData } = useContext(AppContext);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
      };

  return (
    <section className="page-head__film-block container">
        <Slider {...settings}>
          {filmData.map((item, ind) => (
            <div className="page-head__film-box" key={ind}>
              <div className="page-head__poster-wrap">
                <div className="page-head__image-wrap"><img src={imgData + item.poster} alt="posterImage"/></div>
                <div className="page-head__shadow"></div>
              </div>
              <div className="page-head__film-title">
                <h6>{item.orig_title}</h6>
              </div>
              <div className="page-head__film-text">
                <p>{typeof item.release == 'string' ? item.release.slice(0,4) : item.release}, <span className="page-head__film-language">{item.language}</span></p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
  )
}
