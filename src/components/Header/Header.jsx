/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import logo from "../../logo.png";
import backgroundHeader from "../../bg.jpg";
import { NavLink, Route, Routes } from "react-router-dom";
import {
  ROUTE_BASKET,
  ROUTE_CATALOG,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_NEWS,
  ROUTE_PAGES,
  ROUTE_SHOP,
} from "../../utils/constants";
import { HeaderSlider } from "../HeaderSlider/HeaderSlider";

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
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
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
      className={
        scroll > document.documentElement.clientHeight / 6
          ? "page-head page-head_adapt"
          : "page-head"
      }
      style={{ backgroundImage: `url(${backgroundHeader})` }}
    >
      <div
        className={
          scroll > document.documentElement.clientHeight / 6
            ? "page-head__absolute-bg"
            : ""
        }
      >
        <div
          className={
            scroll > document.documentElement.clientHeight / 6
              ? "page-head__wrap page-head__wrap_app container"
              : "page-head__wrap container"
          }
        >
          <div className="page-head__adaptive-wrap">
            <div
              className={
                scroll > document.documentElement.clientHeight / 6
                  ? ""
                  : "page-head__logo-wrap"
              }
            >
              <a href="#" target="_blank" className="page-head__link-logo" onClick={(e)=>{
                e.preventDefault();
                window.scroll(0,0);
              }}>
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <nav className="page-head__navigation container">
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
      </div>
      <Routes>
        <Route path={ROUTE_HOME} element={<HeaderSlider />} />
        <Route path={ROUTE_CATALOG} element={<h1>1</h1>} />
        <Route path={ROUTE_NEWS} element={<h1>1</h1>} />
        <Route path={ROUTE_PAGES} element={<h1>1</h1>} />
      </Routes>
      <div className={
          scroll > document.documentElement.clientHeight / 1.46
            ? "page-head__button-up icon-up"
            : "page-head__button-up icon-up page-head__button-up_hidden"
        } onClick={()=>window.scroll(0,0)}></div>
    </header>
  );
};

//TODO fix routes in 134 string