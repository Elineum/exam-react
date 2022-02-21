import React, { useContext } from "react";
import { AppContext } from "../../context";
import "./TopBox.scss";

export const TopBox = () => {
  const { imgData, filmData, getInfo } = useContext(AppContext);

  return (
    <section className="top-box">
      <div className="top-box__content-block container">
        <div className="top-box__title-block">
          <div className="top-box__title-wrap">
            <h1>top box office</h1>
          </div>
          <div className="top-box__span-wrap">
            <span></span>
          </div>
        </div>
        <div className="top-box__film-block">
          <ul className="top-box__list">
            {filmData.map((item, index) => {
              if (index < 4) {
                return (
                  <li className="top-box__item film-box" key={index} data-id={item.id} onClick={getInfo}>
                    <div className="top-box__img-block">
                      <div className="top-box__img-wrap">
                        <img src={imgData + item.poster} alt="top-box-films" />
                      </div>
                      <div className="top-box__shadow"></div>
                    </div>
                    <div className="top-box__film-title">
                      <a href="#" className="top-box__title-link">
                        {item.title}
                      </a>
                    </div>
                    <div className="top-box__release">
                      <span>
                        {item.release ? item.release.slice(0, 4) : ""},{" "}
                        {item.language}
                      </span>
                    </div>
                    <div className="top-box__price">
                      <span>$29.00</span>
                      <button className="top-box__price-button">
                        buy movie
                      </button>
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
