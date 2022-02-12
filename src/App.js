import React, { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { AppContext } from "./context";

const mock = [
  {
    adult: true,
    path: "undefined",
    id: "undefined",
    language: "undefined",
    orig_title: "undefined",
    overwiev: "undefined",
    popularity: "undefined",
    poster: "undefined",
    release: "undefined",
    title: "undefined",
    video: "undefined",
    vote_avg: "undefined",
    vote_count: "undefined",
  },
];

function App() {
  let localFilm = localStorage.getItem("data");
  let localImg = localStorage.getItem("img");
  let check = localFilm ? localFilm : mock;
  const [filmData, setFilmData] = useState([check]);
  const [imgData, setImgData] = useState([localImg]);
  const [pageData, setPageData] = useState(0);

  useEffect(() => {
    fetch(process.env.REACT_APP_API)
      .then((response) => response.json())
      .then((json) => {
        let data = json.results;
        let temp = data.map((item) => ({
          adult: item.adult,
          path: item.backdrop_path,
          id: parseInt(item.id),
          language: item.original_language,
          orig_title: item.original_title,
          overwiev: item.overview,
          popularity: parseInt(item.popularity),
          poster: item.poster_path,
          release: item.release_date,
          title: item.title,
          video: item.video,
          vote_avg: item.vote_average,
          vote_count: item.vote_count,
        }));
        setFilmData(temp);
        localStorage.setItem("data", JSON.stringify(temp));
      });
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_IMG_API)
      .then((response) => response.json())
      .then((json) => {
        let images = json.images;
        let original = images.poster_sizes[images.poster_sizes.length - 1];
        let url = images.base_url + original;
        setImgData(url);
        localStorage.setItem("img", JSON.stringify(url));
      });
  }, []);

  console.log(filmData);

  return (
    <AppContext.Provider value={{ filmData, imgData }}>
      <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    </AppContext.Provider>
  );
}

export default App;
