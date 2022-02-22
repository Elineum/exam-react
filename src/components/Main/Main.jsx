import { Route, Routes } from "react-router-dom";
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
import { Void } from "../Void/Void";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_CATALOG} element={<Void/>} />
        <Route path={ROUTE_NEWS} element={<Void/>} />
        <Route path={ROUTE_PAGES} element={<Void/>} />
        <Route path={ROUTE_SHOP} element={<Void/>} />
        <Route path={ROUTE_CONTACT} element={<Void/>} />
        <Route path={ROUTE_BASKET} element={<Void/>} />
        <Route path="*" element={<h1>Wrong page :(</h1>} />
      </Routes>
    </main>
  );
};
