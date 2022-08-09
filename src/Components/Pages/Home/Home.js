import React from "react";
import Banner from "../../Banner/Banner";
import About from "./About/About";
import Cars from "./Cars/Cars";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cars></Cars>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;
