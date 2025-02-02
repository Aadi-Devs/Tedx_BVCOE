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
import infoButtonImgLeft from "../../Tedx-Website/src/assets/infoButtonImgLeft.svg";
import infoButtonImgRight from "../../Tedx-Website/src/assets/infoButtonImgRight.svg";
import infoButtonImgLeftMobile from "../../Tedx-Website/src/assets/infoButtonImgLeftMobile.svg";
import infoButtonImgRightMobile from "../../Tedx-Website/src/assets/infoButtonImgRightMobile.svg";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PassesButton />
      <InfoButtons />
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
      <img src={year} alt="" width="1682" height="250" className="" />
      <div className="flex h-full items-center">
        <a href="">
          <button className="bg-gray-400 flex flex-row items-center justify-center gap-3 transition-all text-center text-xl text-black font-bold py-2 px-4 rounded-xl h-16">
            GET PASSES NOW
            <img src={Passes_btn_heart} alt="" className="w-4" />
          </button>
        </a>
      </div>
    </div>
  );
};

const InfoButtons = () => {
  return (
    <>
      <div className="flex relative w-full flex-col items-center sm:h-[600px] h-[700px] bg-black gap-10">
        <img src={infoButtonImgLeft} alt="" height="450" width="450" className="absolute left-0"/>
        <img src={infoButtonImgRight} alt="" height="450" width="450" className="absolute right-0"/>
        <img src={infoButtonImgLeftMobile} alt="" width="190" height="500" className="absolute hidden"/>
        <img src={infoButtonImgRightMobile} alt="" width="190" height="500" className="absolute hidden"/>
        <h1 className=" text-white text-2xl font-bold top-0 uppercase">WHAT IS TED?</h1>
        <div className=" flex flex-row items-center justify-center gap-4">
          <button className="bg-none text-white sm:h-16 h-14 sm:px-8 px-4 py-2 items-center justify-center border-2 border-white rounded-xl font-bold">TED</button>
          <button className="bg-none text-white sm:h-16 h-14 sm:px-8 px-4 py-2 items-center justify-center border-2 border-white rounded-xl font-bold">TEDx</button>
          <button className="bg-white text-black sm:h-16 h-14 sm:px-8 px-4 py-2 items-center justify-center border-2 border-white rounded-xl font-bold">TEDxBVCOE</button>
        </div>
        <div className=" sm:w-[600px] font-medium px-10">
          <p className="flex text-white text-xl sm:text-justify text-justify">TED (Technology, Entertainment, Design) is a global platform that hosts conferences featuring influential speakers from various fields who share their innovative ideas and experiences. Founded in 1984, TED has become synonymous with "Ideas Worth Spreading." The main TED conference is held annually in Vancouver, Canada, and its talks cover a wide range of topics, including science.</p>
          <p className="hidden text-white text-xl sm:text-justify text-justify">TEDx events are independently organized TED-like conferences that can take place anywhere in the world. These events aim to bring the spirit of TED to local communities and provide a platform for individuals to share their ideas and perspectives. TEDx talks cover a broad spectrum of subjects, often reflecting the unique challenges and innovations of a particular region. year.</p>
          <p className="hidden text-white text-xl sm:text-justify text-justify">TEDxBVCOE is a specific instance of a TEDx event affiliated with Bharati Vidyapeeth College of Engineering (BVCOE) in Delhi, India. Organized independently by a dedicated local team of volunteers, TEDxBVCOE serves as a platform for students, educators, and professionals to share their insights and ideas with the community. The "BVCOE" in TEDxBVCOE represents Bharati Vidyapeeth College of Engineering, the hosting institution.</p>
        </div>
      </div>
    </>
  );
};

export default App;
