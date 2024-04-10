import React from "react";
import "./home.css";
import VideoBackground from "../components/VideoBackground";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {
  return (
    <main className="max-w-[100vw] overflow-x-hidden scroll-smooth section-container">
      <a
        href="#service"
        className="text-white absolute  bottom-8 right-8 md:right-20 md:bottom-20 icon-container cursor-pointer button-container glow"
      >
        <MdKeyboardDoubleArrowDown size={64} className="animated-icon" />
      </a>
      <section
        id="home"
        className=" flex 
    h-[100vh] text-[#fff] font-avertaRegular flex-col text-[40px] sm:text-[45px] justify-end items-start"
      >
        <VideoBackground />
        <div className="flex flex-col md:flex-row w-full  md:justify-between md:items-end">
          <div className=" text-start  mb-8 ml-8 md:ml-16 md:mb-16 ">
            <h1>VISUALIZING</h1>
            <h1>YOUR</h1>
            <h1>SUCCESS</h1>
          </div>
        </div>
      </section>
      <section
        id="service"
        className="w-[100vw] h-[100vh] bg-white border-t border border-black"
      >
        <div className="flex w-full h-full justify-center items-center"></div>
      </section>
      <section id="about" className="w-[100vw] h-[100vh]">
        <div className="flex w-full h-full justify-center items-center bg-white"></div>
      </section>
    </main>
  );
};

export default Home;
