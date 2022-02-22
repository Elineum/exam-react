import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from "../../context";
import { fieldId } from "../../utils/helpers";
import "./MovieList.scss";

export const MovieList = () => {
  const [typeFilm, setTypeFilm] = useState(0);
  const { filmData, imgData, getInfo, windowWidth } = useContext(AppContext);
  const [currentArray, setCurrentArray] = useState(filmData);

  const sortedArr = Object.assign([], filmData);

  function typeSwither(num) {
    if (num === 1) {
      sortedArr.sort(fieldId("vote_avg"));
      setCurrentArray(sortedArr);
      setTypeFilm(1);
    } else if (num === 2) {
      sortedArr.sort(fieldId("release"));
      setCurrentArray(sortedArr);
      setTypeFilm(1);
    } else {
      setCurrentArray(filmData);
      setTypeFilm(0);
    }
  }

  useEffect(()=>{
    setCurrentArray(filmData);
  }, [filmData])

  let settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    rows: 2,
    slidesPerRow: 1,
    draggable: false,
  };

  if (windowWidth >= 1440) {
    settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
      rows: 2,
      slidesPerRow: 1,
      draggable: false,
    };
  } else if (windowWidth < 1440 && windowWidth >= 1024) {
    settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      rows: 2,
      slidesPerRow: 1,
      draggable: false,
    };
  } else if (windowWidth < 1024 && windowWidth >= 768) {
    settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 2,
      rows: 2,
      slidesPerRow: 1,
      adaptiveHeight: true,
      draggable: false,
    };
  } else if (windowWidth <= 768) {
    settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 2,
      slidesPerRow: 1,
      adaptiveHeight: true,
      draggable: false,
    };
  }

  return (
    <section className="movie-list">
      <div className="movie-list__global-block container">
        <div className="movie-list__title-block">
          <div className="movie-list__title-wrap">
            <h2>Watch movies online</h2>
          </div>
          <div className="movie-list__span-wrap">
            <span></span>
          </div>
        </div>
        <div className="movie-list__button-type-wrap">
          <input type="radio" name="sort-btn" id="movie-list-sort-btn-1" defaultChecked className="movie-list__hidden-input"/>
          <label
            htmlFor="movie-list-sort-btn-1"
            className="movie-list__button-type movie-list__button-type-1"
            onClick={() => typeSwither(0)}
          >
            total list
          </label>
          <input type="radio" name="sort-btn" id="movie-list-sort-btn-2" className="movie-list__hidden-input"/>
          <label
            htmlFor="movie-list-sort-btn-2"
            className="movie-list__button-type movie-list__button-type-2"
            onClick={() => typeSwither(1)}
          >
            top rated
          </label>
          <input type="radio" name="sort-btn" id="movie-list-sort-btn-3" className="movie-list__hidden-input"/>
          <label
            htmlFor="movie-list-sort-btn-3"
            className="movie-list__button-type movie-list__button-type-3"
            onClick={() => typeSwither(2)}
          >
            new releases
          </label>
        </div>
        <div className="movie-list__content-block">
          <ul className={!typeFilm ? 'movie-list__list' : 'movie-list__list-non-slider'}>
            {!typeFilm
              ? <Slider {...settings}> {currentArray.map((item, index) => (
                  <li
                    className="movie-list__item film-box"
                    key={index}
                    data-id={item.id}
                    onClick={getInfo}
                  >
                    <div className="movie-list__img-wrap">
                      <img src={imgData + item.poster} alt="poster" />
                    </div>
                    <div className="movie-list__content-text">
                      <div className="movie-list__content-title-wrap">
                        <a href="#" className="movie-list__content-link">
                          {item.title}
                        </a>
                      </div>
                      <div className="movie-list__content-release">
                        <span>
                          {item.release ? item.release.slice(0, 4) : ""},{" "}
                          {item.language}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
                </Slider>
              : currentArray.map((item, index) => {
                  if (index < 8) {
                    return (
                      <li
                        className="movie-list__item film-box"
                        key={index}
                        data-id={item.id}
                        onClick={getInfo}
                      >
                        <div className="movie-list__img-wrap">
                          <img src={imgData + item.poster} alt="poster" />
                        </div>
                        <div className="movie-list__content-text">
                          <div className="movie-list__content-title-wrap">
                            <a href="#" className="movie-list__content-link">
                              {item.title}
                            </a>
                          </div>
                          <div className="movie-list__content-release">
                            <span>
                              {item.release ? item.release.slice(0, 4) : ""},{" "}
                              {item.language}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  } else return;
                })}
          </ul>
        </div>
      </div>
    </section>
  );
};
