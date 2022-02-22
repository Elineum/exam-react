/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "./NewsLetter.scss";
import avengersBG from "../../avengersBG.jpg";
import emailjs from "@emailjs/browser";

// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const EMAIL_REGEXP = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

export const NewsLetter = () => {
  const [isVisible, setVisible] = useState(0);

  function confirmShow() {
    if (!isVisible) {
      setVisible(1);
    } else if (isVisible === 1) {
      setVisible(2);
    } else {
      setVisible(0);
    }
  }

  useEffect(() => {
    if (isVisible === 1) {
      setTimeout(confirmShow, 1000);
    } else if (isVisible === 2) {
      setTimeout(confirmShow, 2500);
    }
  }, [isVisible]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_MAIL_API
    );
    e.target.reset();
    confirmShow();
  };

  return (
    <section
      className="newsletters"
      style={{ backgroundImage: `url(${avengersBG})` }}
    >
      <div className="newsletters__content">
        <div className="newsletters__title-wrap">
          <h1>newsletters</h1>
        </div>
        <div className="newsletters__span-wrap">
          <span></span>
        </div>
        <div className="newsletters__text">
          <p>
            Enter your email address to receive all news, updates on new
            arrivals, special offers and other discount information.
          </p>
        </div>
        <div className="newsletters__form-block">
          <form className="newsletters__form" onSubmit={sendEmail}>
            <input
              type="email"
              name="mail"
              id="newslettersInput"
              placeholder="Your e-mail..."
              className="newsletters__input"
            />
            <button type="submit" className="newsletters__button">
              Subscribe
            </button>
          </form>
          <div
            className={`newsletters__confirm_wrap ${
              isVisible ? "newsletters__confirm_wrap_visible" : ""
            } ${isVisible === 1 ? "icon-spinner" : "icon-check"}`}
          >
            <span className="newsletters__confirm">
              {isVisible === 1 ? "Sending" : "Successfully sent!"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
