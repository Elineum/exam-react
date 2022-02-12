import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../../context";
import {
  ROUTE_BASKET,
  ROUTE_CATALOG,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_NEWS,
  ROUTE_PAGES,
  ROUTE_SHOP,
} from "../../utils/constants";
import { Home } from "../Home/Home";

export const Main = () => {
  const { filmList } = useContext(AppContext);

  return (
    <main>
      <Routes>
        <Route path={ROUTE_HOME} element={<Home/>} />
        <Route path={ROUTE_CATALOG} element={<h1>TEST2</h1>} />
        <Route path={ROUTE_NEWS} element={<h1>TEST3</h1>} />
        <Route path={ROUTE_PAGES} element={<h1>TEST4</h1>} />
        <Route path={ROUTE_SHOP} element={<h1>TEST5</h1>} />
        <Route path={ROUTE_CONTACT} element={<h1>TEST6</h1>} />
        <Route path={ROUTE_BASKET} element={<h1>TEST8</h1>} />
        <Route path="*" element={<h1>Wrong page :(</h1>} />
      </Routes>
    </main>
  );
};
