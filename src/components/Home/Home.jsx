import React from "react";
import { ComingSoon } from "../ComingSoon/ComingSoon";
import { MovieList } from "../MovieList/MovieList";
import { NewsLetter } from "../NewsLetter/NewsLetter";
import { OurPartners } from "../OurPartners/OurPartners";
import { RecentNews } from "../RecentNews/RecentNews";
import { Reviews } from "../Reviews/Reviews";
import { TopBox } from "../TopBox/TopBox";

export const Home = () => {
  return (
    <>
      <MovieList></MovieList>
      <ComingSoon></ComingSoon>
      <TopBox></TopBox>
      <NewsLetter></NewsLetter>
      <RecentNews></RecentNews>
      <OurPartners></OurPartners>
      <Reviews></Reviews>
    </>
  );
};
