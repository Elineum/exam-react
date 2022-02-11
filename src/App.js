import React, { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "&page=1")
      .then((response) => response.json())
      .then((data) => {
        let temp = data;
        setFilmList(temp);
      });
  }, []);

  console.log(filmList);

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
