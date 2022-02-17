/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import "./Header.scss";
import logo from "../../logo.png";
import backgroundHeader from "../../bg.jpg";
import { NavLink } from "react-router-dom";
import {
  ROUTE_BASKET,
  ROUTE_CATALOG,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_NEWS,
  ROUTE_PAGES,
  ROUTE_SHOP,
} from "../../utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AppContext } from "../../context";

const MENU_ITEMS = [
  { path: ROUTE_HOME, label: "Home", classes: "page-head__link" },
  {
    path: ROUTE_CATALOG,
    label: "Catalog",
    classes: "page-head__link header-down",
  },
  { path: ROUTE_NEWS, label: "News", classes: "page-head__link header-down" },
  { path: ROUTE_PAGES, label: "Pages", classes: "page-head__link header-down" },
  { path: ROUTE_SHOP, label: "Shop", classes: "page-head__link header-down" },
  { path: ROUTE_CONTACT, label: "Contact Us", classes: "page-head__link" },
  {
    path: ROUTE_BASKET,
    label: "15",
    classes: "page-head__link header-shopping",
  },
];

export const Header = () => {
  const [visible, setVisible] = useState(0);
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

  function visibility() {
    if (visible) {
      setVisible(0);
    } else {
      setVisible(1);
    }
  }

  return (
    <header
      className="page-head"
      style={{ backgroundImage: `url(${backgroundHeader})` }}
    >
      <div className="page-head__wrap container">
        <div className="page-head__adaptive-wrap">
          <div className="page-head__logo-wrap">
            <a href="#" target="_blank" className="page-head__link-logo">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <nav className="page-head__navigation">
          <ul className="page-head__list">
            {MENU_ITEMS.map((item, ind) => (
              <li key={ind} className="page-head__item">
                <NavLink to={item.path} className={item.classes}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="page-head__item page-head__item-search">
              <button
                className={`page-head__link page-head__link_btn ${
                  !visible ? "header-search" : "x-icon"
                }`}
                onClick={() => visibility()}
              ></button>
              <div
                className={`page-head__search-wrap ${
                  !visible ? "search-hidden" : ""
                }`}
              >
                <form className="page-head__form">
                  <label htmlFor="search-area" className="page-head__label">
                    <input
                      type="text"
                      id="search-area"
                      className="page-head__input"
                      placeholder="Search.."
                    />
                  </label>
                  <button
                    type="submit"
                    className="page-head__form-submit"
                  ></button>
                </form>
              </div>
            </li>
          </ul>
        </nav>
      </div>
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
    </header>
  );
};
