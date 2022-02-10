import React, { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=13204a6283a695abbf1dbce108696bf6"
    )
      .then((response) => response.json())
      .then((data) => {
        let temp = data;
        setFilmList(temp);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("mock", JSON.stringify(filmList));
  }, [filmList]);

  let mock = localStorage.getItem("mock");
  console.log(mock);

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
