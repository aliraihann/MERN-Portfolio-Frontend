import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./about";
import Experiences from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import { useSelector } from "react-redux";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      {/* <Header /> */}
      {portfolioData && (
        <div className="bg-image bg-contain bg-white px-10 sm:px-5">
          <Intro />
          <About />
          <Projects />
          <Experiences />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
