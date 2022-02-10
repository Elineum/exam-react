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
  { path: ROUTE_HOME, label: "Home" },
  { path: ROUTE_CATALOG, label: "Catalog" },
  { path: ROUTE_NEWS, label: "News" },
  { path: ROUTE_PAGES, label: "Pages" },
  { path: ROUTE_SHOP, label: "Shop" },
  { path: ROUTE_CONTACT, label: "Contact Us" },
  { path: ROUTE_SEARCH, label: "1" },
  { path: ROUTE_BASKET, label: "2" },
];

export const Header = () => {
  return (
    <header className="page-head">
      <div className="page-head__wrap">
        <div className="page-head__logo-wrap">
          <a href="#" target="_blank" className="page-head__link">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav className="page-head__navigation">
          <ul className="page-head__list">
            {MENU_ITEMS.map((item, ind) => (
              <li key={ind} className="page-head__item">
                <NavLink to={item.path} className="page-head__link">{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
