import React from "react";
import "./index.css";
import navLogo from "../../Tedx-Website/src/assets/navLogo.svg";
import homeLogo from "../../Tedx-Website/src/assets/homeLogo.svg";
import heroImg1 from "../../Tedx-Website/src/assets/heroImg1.svg";
import heroImgMobile from "../../Tedx-Website/src/assets/heroImgMobile.svg";
import heroImg2 from "../../Tedx-Website/src/assets/heroImg2.svg";
import navMobileMenu from "../../Tedx-Website/src/assets/navMobileMenu.svg";
import year from "../../Tedx-Website/src/assets/2025.svg";
import Passes_btn_heart from "../../Tedx-Website/src/assets/Passes_btn_heart.png";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PassesButton />
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="navbar h-full w-full bg-black sm:flex hidden justify-between items-center overflow-hidden flex-row sm:px-6 sm:py-[0.94rem]">
        <div className="flex text-white text-xl gap-5">
          <a href="#speakers" className="">
            SPEAKERS
          </a>
          <a href="#tickets" className="">
            TICKETS
          </a>
          <a href="#partners" className="">
            PARTNERS
          </a>
        </div>
        <div className="navbar-brand">
          <img src={navLogo} alt="" className="w-[14rem]" />
        </div>
        <div className="flex text-white text-xl gap-5">
          <a href="#faqs" className="">
            FAQs
          </a>
          <a href="#contact" className="">
            CONTACT
          </a>
          <span className="">TEDxBVCOE22</span>
        </div>
      </nav>
      <nav className="navbar h-full w-full bg-black sm:hidden flex flex-row items-center justify-between px-4 py-[1.55rem]">
        <a className="" href="/">
          <img src={navLogo} alt="" width="134" height="30" />
        </a>
        <img
          src={navMobileMenu}
          alt=""
          className="w-[28px] object-contain text-white"
        />
        <div className="hidden transition-all p-6 absolute z-50 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-black">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div className="">
        <img
          src={homeLogo}
          alt=""
          className="static sm:h-full h-screen w-full object-cover object-center items-center justify-center"
        />
        <div className="top-20 z-10 bg-black opacity-80 absolute sm:h-[1172px] h-screen w-full"></div>
        <div className="absolute flex sm:flex-row flex-col sm:top-80 top-40 w-full sm:justify-evenly sm:gap-0 gap-24 items-center">
          <img src={heroImg1} alt="" className="sm:w-[500px] w-[300px] z-20" />
          <img
            src={heroImgMobile}
            alt=""
            className="sm:invisible visible w-[300px] z-20"
          />
          <img
            src={heroImg2}
            alt=""
            className="sm:w-[500px] sm:visible invisible w-[300px] z-20"
          />
        </div>
      </div>
    </>
  );
};

const PassesButton = () => {
  return (
    <div className="sm:h-[480px] h-[250px] w-full bg-black flex flex-col items-center">
      <img src={year} alt="" width="1682" height="250" className=""/>
      <div className="flex h-full items-center">
        <a href="">
          <button className="bg-gray-400 flex flex-row items-center justify-center gap-3 transition-all text-center text-xl text-black font-bold py-2 px-4 rounded-xl h-16">
            GET PASSES NOW
            <img src={Passes_btn_heart} alt="" className="w-4"/>
          </button>
        </a>
      </div>
    </div>
  );
};

export default App;
