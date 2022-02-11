/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.scss";
import logo from "../../logo.png";
import { NavLink } from "react-router-dom";
import {
  ROUTE_BASKET,
  ROUTE_CATALOG,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_NEWS,
  ROUTE_PAGES,
  ROUTE_SEARCH,
  ROUTE_SHOP,
} from "../../utils/constants";

const MENU_ITEMS = [
  { path: ROUTE_HOME, label: "Home", classes: "page-head__link" },
  { path: ROUTE_CATALOG, label: "Catalog", classes: "page-head__link header-down" },
  { path: ROUTE_NEWS, label: "News", classes: "page-head__link header-down" },
  { path: ROUTE_PAGES, label: "Pages", classes: "page-head__link header-down" },
  { path: ROUTE_SHOP, label: "Shop", classes: "page-head__link header-down" },
  { path: ROUTE_CONTACT, label: "Contact Us", classes: "page-head__link" },
  { path: ROUTE_SEARCH, label: "", classes: "page-head__link header-search" },
  { path: ROUTE_BASKET, label: "2", classes: "page-head__link header-shopping" },
];

export const Header = () => {
  return (
    <header className="page-head">
      <div className="page-head__wrap container">
        <div className="page-head__logo-wrap">
          <a href="#" target="_blank" className="page-head__link-logo">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav className="page-head__navigation">
          <ul className="page-head__list">
            {MENU_ITEMS.map((item, ind) => (
              <li key={ind} className={"page-head__item"}>
                <NavLink to={item.path} className={item.classes}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
