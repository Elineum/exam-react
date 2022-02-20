import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import "./ModalWindow.scss";

let mockInfo = {
  genres: [
    { id: 1, name: "Loading..." },
    { id: 2, name: "Loading..." },
    { id: 3, name: "Loading..." },
    { id: 4, name: "Loading..." },
  ],
  title: "Loading...",
  overview: "Loading...",
  poster: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  release_date: "9999-99-99",
  status: "Released",
  tagline: "All okay",
  budget: 0,
  revenue: 0,
  original_language: "en",
};

export const ModalWindow = () => {
  const [redirectedData, setRedirectedData] = useState(mockInfo);
  const { imgData, targetInfo, isModalVisible, modalToggle } =
    useContext(AppContext);

  useEffect(() => {
    setRedirectedData(targetInfo);
  }, [targetInfo]);

  return (
    <div
      className={`modal-window ${
        isModalVisible ? "" : "modal-window__modal-hidden"
      }`}
    >
      <div className="modal-window__content">
        <div className="modal-window__img-wrap">
          <img src={imgData + redirectedData.poster_path} alt="poster" />
        </div>
        <div className="modal-window__text-content">
          <div className="modal-window__text-title">
            <h2>
              {redirectedData.title} (
              {redirectedData.release_date
                ? redirectedData.release_date.slice(0, 4)
                : "Heh"}
              )
            </h2>
          </div>
          <div className="modal-window__text-genres">
            <span className="modal-window__first-info">Genres: </span>
            {redirectedData.genres
              ? redirectedData.genres.map((item, index) => (
                  <span key={index}>{item.name}</span>
                ))
              : "Loading..."}
          </div>
          <div className="modal-window__release-date">
            <span className="modal-window__first-info">Release date: </span>
            <span>
              {redirectedData.release_date} [{redirectedData.status}]
            </span>
          </div>
          <div className="modal-window__language">
            <span className="modal-window__first-info">Language: </span>
            <span className="modal-window__uppercase">
              {redirectedData.original_language}
            </span>
          </div>
          <div className="modal-window__prod-country">
            <div>
              <span className="modal-window__first-info">
                Production country:
              </span>
            </div>
            <div>
              {redirectedData.production_countries
                ? redirectedData.production_countries.map((item, index) => (
                    <span key={index}>{item.name} </span>
                  ))
                : "Loading..."}
            </div>
          </div>
          <div className="modal-window__votes">
            <span className="modal-window__first-info">Average vote: </span>
            <span>{redirectedData.vote_average}</span>{" "}
            <span className="modal-window__first-info">Vote count: </span>
            <span>{redirectedData.vote_count}</span>
          </div>
          <div className="modal-window__tagline">
            <span className="modal-window__first-info">Tagline: </span>
            <span>{redirectedData.tagline}</span>
          </div>
          <div className="modal-window__text">
            <span className="modal-window__first-info">Overview: </span>
            <p>{redirectedData.overview}</p>
          </div>
        </div>
        <div className="modal-window__button-wrap">
          <button
            className="modal-window__button-close"
            onClick={modalToggle}
          ></button>
        </div>
        <div
          className={`modal-window__loader-wrap ${
            isModalVisible === 1 ? "" : "modal-window__loader-wrap-closed"
          }`}
        >
          <div className="modal-window__loader modal-spinner"></div>
        </div>
      </div>
    </div>
  );
};
