import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import MobNavbar from "../components/MobileNavbar/MobNavbar";

const Home = () => {
  return (
    <>
      <MobNavbar />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
