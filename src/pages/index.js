import React, { useState } from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
} from "../Components/InfoSection/Data";
import Navbar from "../Components/Navbar";
import CardSection from "../Components/CardSection";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <CardSection />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />

      <Footer />
    </>
  );
};

export default Home;
