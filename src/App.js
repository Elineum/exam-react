import React, { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { AppContext } from "./context";

const mockData = [
  {
    adult: true,
    path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    id: "634649",
    language: "en",
    orig_title: "Spider-Man: No Way Home",
    overwiev:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    popularity: 7700,
    poster: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    release: "2021-12-15",
    title: "Spider-Man: No Way Home",
    video: false,
    vote_avg: 8.4,
    vote_count: 7867,
  },
];

const mockGenres = [
  {
    id: 0,
    name: "Mock",
  },
];

const mockImg = "http://image.tmdb.org/t/p/w300";

function App() {
  let localFilm = localStorage.getItem("data");
  let localImg = localStorage.getItem("img");
  let localGenres = localStorage.getItem("genres");
  let checkData = localFilm ? localFilm : mockData;
  let checkImg = localImg ? localImg : mockImg;
  let checkGenres = localGenres ? localGenres : mockGenres;

  const [filmData, setFilmData] = useState([checkData]);
  const [imgData, setImgData] = useState([checkImg]);
  const [genresData, setGenresData] = useState([checkGenres]);
  const [pageData, setPageData] = useState(1);

  useEffect(() => {
    async function fetchData(num) {
      await fetch(process.env.REACT_APP_API + `&page=${num}`)
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
    }
    fetchData(pageData);
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_GENRES_API)
      .then((response) => response.json())
      .then((json) => {
        let genresList = json.genres;
        setGenresData(genresList);
        localStorage.setItem("genres", JSON.stringify(genresList));
      });
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_IMG_API)
      .then((response) => response.json())
      .then((json) => {
        let images = json.images;
        let original = images.backdrop_sizes[0];
        let url = images.base_url + original;
        setImgData(url);
        localStorage.setItem("img", JSON.stringify(url));
      });
  }, []);

  console.log(filmData);
  console.log(imgData);
  console.log(genresData);

  return (
    <AppContext.Provider value={{ filmData, imgData, genresData }}>
      <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    </AppContext.Provider>
  );
}

export default App;
