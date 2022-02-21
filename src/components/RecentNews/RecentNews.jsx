/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import evenLine from "../../news-image/evenLine.jpg";
import team from "../../news-image/team.jpg";
import horror from "../../news-image/horror.jpg";
import "./RecentNews.scss";

const NEWS = [
  {
    image: evenLine,
    title: '"Better Call Saul" Writer Offers Advice',
    date: "December 26, 2018",
    text: "“Better Call Saul” writer Gennifer Hutchison offered some advice to Jason Blum after the Blumhouse Productions chief said in an interview that he’s “trying” to hire a woman...",
    commentNum: "2",
  },
  {
    image: team,
    title: '"Single Parents" Lands Full-Season Order From ABC',
    date: "December 26, 2018",
    text: "ABC has given a full-season order to the freshman comedy “Single Parents.” Three episodes into its run, the comedy created...",
    commentNum: "2",
  },
  {
    image: horror,
    title: '"Animals" Canceled After Three Seasons at HBO',
    date: "December 26, 2018",
    text: "HBO has canceled the animated series “Animals” after three seasons, Variety has confirmed. The series was created by executive producers Phil Matarese and Mike Luciano...",
    commentNum: "2",
  },
];

export const RecentNews = () => {
  return (
    <section className="recent-news container">
      <div className="recent-news__global-wrap">
        <div className="recent-news__title-wrap">
          <h1>Recent News</h1>
        </div>
        <div className="recent-news__span-wrap">
          <span></span>
        </div>
        <div className="recent-news__content-block">
          <ul className="recent-news__content-list">
            {NEWS.map((item, index) => (
              <li className="recent-news__content-item" key={index}>
                <div className="recent-news__img-wrap">
                  <img src={item.image} alt="recent-news" />
                </div>
                <a href="#" className="recent-news__title-link">
                  {item.title}
                </a>
                <div className="recent-news__content-date">
                  <span>{item.date}</span>
                </div>
                <div className="recent-news__content-text">
                  <p>{item.text}</p>
                </div>
                <a
                  href="#"
                  className="recent-news__comment-num recent-news-comment"
                >
                  {item.commentNum}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="recent-news__button-wrap">
          <button className="recent-news__button">view all blog posts</button>
        </div>
      </div>
    </section>
  );
};
