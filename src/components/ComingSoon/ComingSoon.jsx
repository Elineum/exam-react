/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import "./ComingSoon.scss"

const mockSoon = {
original_title: "Loading...",
overview: "Loading...",
poster_path: "Loading...",
release_date: "9999-99-99",
}

export const ComingSoon = () => {
  const [comingSoon, setComingSoon] = useState(mockSoon);
  const [trailerText, setTrailerText] = useState('Open trailer?');
  const { imgData } = useContext(AppContext);

  useEffect(() => {
    fetch(process.env.REACT_APP_SEARCH + "758769" + process.env.REACT_APP_KEY)
      .then((response) => response.json())
      .then((json) => setComingSoon(json));
  }, []);

  function toggleTrailerWindow() {
    if (trailerText === 'Open trailer?') setTrailerText('Close trailer?')
    else setTrailerText('Open trailer?')
  }

  return (
    <section className="coming-soon">
      <div className="coming-soon__total-block container">
        <div className="coming-soon__title-wrap">
          <h2>coming soon</h2>
        </div>
        <div className="coming-soon__span-wrap">
          <span></span>
        </div>
        <div className="coming-soon__content-block">
          <div className="coming-soon__img-wrap">
            <img src={imgData + comingSoon.poster_path} alt="coming-soon" />
          </div>
          <div className="coming-soon__content">
            <div className="coming-soon__content-title">
              <a href="#" className="coming-soon__content-title-link">{comingSoon.original_title}</a>
            </div>
            <div className="coming-soon__small-info">
              <span>1h 01min</span>  |
              <span>
                <a href="#" className="coming-soon__genres-link">  {comingSoon.genres ? comingSoon.genres.map((item)=>(item.name)) : "Loading..."}  </a>
              </span>
              | <span>{comingSoon.release_date}</span>
            </div>
            <div className="coming-soon__content-text">
              <p>{comingSoon.overview}</p>
            </div>
            <div className="coming-soon__about-prod">
              <div className="coming-soon__prod">
                <span>Director: </span>
                <span>Jon Wright</span>
              </div>
              <div className="coming-soon__prod">
                <span>Writers: </span>
                <span>Mark Stay, Jon Wright</span>
              </div>
              <div className="coming-soon__prod">
                <span>Stars: </span>
                <span>Hannah John-Kamen, Douglas Booth, Colm Meaney</span>
              </div>
            </div>
            <div className="coming-soon__button-link-wrap">
              <button className="coming-soon__button-link" onClick={toggleTrailerWindow}>{trailerText}</button>
              {trailerText === 'Close trailer?' ? <iframe width="560" height="315" src="https://www.youtube.com/embed/vQCAgCKQ5WY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="coming-soon__iframe-wrap"></iframe> : ""}
            </div>
          </div>
        </div>
        <div className="coming-soon__button-wrap">
          <button className="coming-soon__button">add to watchlist</button>
        </div>
      </div>
    </section>
  );
};
