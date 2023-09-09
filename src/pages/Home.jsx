import React from "react";
import { Header } from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import Banner from "../components/Banner/Banner";
import Collections from "../components/Collections/Collections";

const Home = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Banner />
      <Collections />
    </div>
  );
};

export default Home;
