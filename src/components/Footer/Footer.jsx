/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../logo.png";
import "./Footer.scss";

// TODO проверить

const ICON_LINKS = [
  { href: "#", icon: "icon-facebook" },
  { href: "#", icon: "icon-twitter" },
  { href: "#", icon: "icon-pinterest" },
  { href: "#", icon: "icon-youtube" },
  { href: "#", icon: "icon-vk" },
  { href: "#", icon: "icon-google" },
];

export const Footer = () => {
  return (
    <footer className="page-foot">
      <section className="page-foot__content">
        <div className="container">
          <div className="page-foot__link-wrap">
            <a href="#" target="_blank" className="page-foot__content">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <ul className="page-foot__list">
            {ICON_LINKS.map((item, index) => (
              <li className="page-foot__item" key={index}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={"page-foot__link " + item.icon}
                ></a>
              </li>
            ))}
          </ul>
          <div className="page-foot__copyright">
            <p>
              © 2022 All Rights Reserved.{" "}
              <a href="#" className="page-foot__copyright-link">
                Terms of Use
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};
