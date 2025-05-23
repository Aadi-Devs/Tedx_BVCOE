import React, { useState } from "react";
import "./index.css";
import "./fonts.css";
import navLogo from "./assets/navLogo.svg";
import heroImg1 from "./assets/heroImg1.svg";
import navMobileMenu from "./assets/navMobileMenu.svg";
import Passes_btn_heart from "./assets/Passes_btn_heart.png";
import Arrow from "./assets/Arrow.png";
import insta_logo from "./assets/insta_logo.png";
import linkedIn_logo from "./assets/linkedIn_logo.png";
import april from "./assets/april.png";
import year from "./assets/2025.png";
import date from "./assets/9th.png";
import Speaker1 from "./assets/Speakers/Oluchi Ikechi 1.jpg";
import Speaker2 from "./assets/Speakers/saakshar duggal 2.jpg";
import Speaker3 from "./assets/Speakers/ria mohta 3.jpg";
import Speaker4 from "./assets/Speakers/sougatta bhata 4.jpg";
import Speaker5 from "./assets/Speakers/anil kapoor 5.jpg";
import Speaker6 from "./assets/Speakers/varda sardana 6.jpg";
import Ticket1 from "./assets/Ticket_1.png";
import Ticket2 from "./assets/Ticket_2.png";
import Ticket3 from "./assets/Ticket_3.png";
import Ticket4 from "./assets/Ticket_4.png";
import Ticket5 from "./assets/Ticket_5.png";
import farmley from "./assets/Sponsors/farmley.png";
import UniStyl from "./assets/Sponsors/UniStyl.png";
import XTCY from "./assets/Sponsors/XTCY.png";
import Paridhi from "./assets/Team/paridhi_harit.jpg";
import Ridhi from "./assets/Team/Ridhi_Gupta.jpeg";
import Aashima from "./assets/Team/Aashima_Bathla.jpeg";
import Abhinav from "./assets/Team/Abhinav_Kumar_Singh.jpg";
import Aditya_Shrivastav from "./assets/Team/Aditya_Shrivastav.jpg";
import Aditya_Singh from "./assets/Team/Aditya_Singh.jpg";
import Bhrigu from "./assets/Team/Bhrigu_Tayal.png";
import Devansh from "./assets/Team/Devansh_Biswas.jpg";
import Harshvardhan from "./assets/Team/Harshvardhan_Singh_Rajput.jpg";
import Maitri from "./assets/Team/Maitri.jpg";
import Priyal from "./assets/Team/Priyal_Agarwal.jpg";
import Uday from "./assets/Team/Uday_singh_pundeer.jpg";
import polo_front from "./assets/polo_front.png";
import polo_back from "./assets/polo_back.png";
import round_neck_front from "./assets/round_neck_front.png";
import round_neck_back from "./assets/round_neck_back.png";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

import pcImage from "./assets/pcImage.jpeg";
import mobileImage from "./assets/mobileImage.jpeg";

// import year from "./assets/2025.png";
// import homeLogo from "./assets/homeLogo.svg";
// import heroImgMobile from "./assets/heroImgMobile.svg";
// import heroImg2 from "./assets/heroImg2.svg";
// import infoButtonImgLeft from "./assets/infoButtonImgLeft.svg";
// import infoButtonImgRight from "./assets/infoButtonImgRight.svg";
// import infoButtonImgLeftMobile from "./assets/infoButtonImgLeftMobile.svg";
// import infoButtonImgRightMobile from "./assets/infoButtonImgRightMobile.svg";

// import { Accordion, Button } from "@material-tailwind/react";
// import { NavArrowDown } from "iconoir-react";

// import card1Img from "./assets/card1Img.webp";
// import card2Img from "./assets/card2Img.webp";
// import card3Img from "./assets/card3Img.webp";
// import card4Img from "./assets/card4Img.webp";
// import card5Img from "./assets/card5Img.webp";
// import Ticket1 from "./assets/Ticket_1.svg";
// import Ticket2 from "./assets/Ticket_2.svg";
// import Ticket3 from "./assets/Ticket_3.svg";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="flex flex-col gap-10 bg-black">
        <PassesButton />
        <InfoButtons />
        <Speakers />
        <TicketBuying />
        <Partners />

        <Team />

        <Merch />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default App;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [selectedEvent, setSelectedEvent] = useState("TEDxBVCOE25");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedEvent(value);

    // Map values to URLs
    const urls = {
      TEDxBVCOE25: "https://www.tedxbvcoe.in/",
      TEDxBVCOE23: "https://te-dx-bvcoe-2023.vercel.app/",
      TEDxBVCOE22: "https://tedxbvcoe-website-66747n5xw-bvcoetedx.vercel.app/",
      TEDxBVCOE21:
        "https://tedxbvcoe-website-66747n5xw-bvcoetedx.vercel.app/2021",
    };

    // Redirect if a URL exists
    if (urls[value]) {
      window.open(urls[value], "_blank"); // open in new tab
      // or use window.location.href = urls[value]; for same tab
    }
  };

  return (
    <>
      <nav
        id="nav"
        className="navbar h-full w-full bg-black sm:flex hidden justify-between items-center overflow-hidden flex-row sm:px-6 sm:py-[0.94rem]"
      >
        <div className="flex text-white text-xl gap-5">
          <Link
            href="#speakers"
            className=""
            onClick={() => scrollToElement("speakers", 800)}
          >
            SPEAKERS
          </Link>
          <Link
            href="#tickets"
            className=""
            onClick={() => scrollToElement("tickets", 1000)}
          >
            TICKETS
          </Link>
          <Link
            href="#partners"
            className=""
            onClick={() => scrollToElement("partners", 1200)}
          >
            PARTNERS
          </Link>
          <Link
            href="#team"
            className=""
            onClick={() => scrollToElement("team", 1400)}
          >
            OUR TEAM
          </Link>
        </div>
        <div className="navbar-brand">
          <img src={navLogo} alt="" className="w-[14rem] lg:mr-16" />
        </div>
        <div className="flex text-white text-xl gap-5">
          <Link
            href="#faqs"
            className=""
            onClick={() => scrollToElement("faqs", 1600)}
          >
            FAQs
          </Link>
          <Link
            href="#contact"
            className=""
            onClick={() => scrollToElement("contact", 1800)}
          >
            CONTACT
          </Link>
          {/* <span className="">TEDxBVCOE25</span> */}

          <div className="relative inline-block bg-transparent text-white">
            <select
              value={selectedEvent}
              onChange={handleChange}
              className="bg-transparent text-white appearance-none outline-none cursor-pointer"
            >
              <option value="TEDxBVCOE25" className="text-black">
                TEDxBVCOE25
              </option>
              <option value="TEDxBVCOE23" className="text-black">
                TEDxBVCOE23
              </option>
              <option value="TEDxBVCOE22" className="text-black">
                TEDxBVCOE22
              </option>
              <option value="TEDxBVCOE21" className="text-black">
                TEDxBVCOE21
              </option>
            </select>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      <nav className="navbar h-screen fixed w-full bg-black sm:hidden flex flex-row items-center justify-between px-4 py-[1.55rem] z-[120]">
        <a className="" href="/">
          <img src={navLogo} alt="" width="134" height="30" />
        </a>
        <button
          className="ham-burger-button custom:hidden cursor-pointer"
          onClick={handleToggle}
        >
          <img
            src={navMobileMenu}
            alt=""
            className="w-[28px] object-contain text-white"
          />
        </button>

        <div
          className={`${
            isOpen ? "slide-in" : "slide-out"
          } w-[15rem] h-screen ham-burger custom:hidden backdrop-blur-lg bg-opacity-40 absolute top-20 right-0 z-10 transition-transform duration-300 z-[150]`}
        >
          <ul className="flex flex-col items-center bg-opacity-40 backdrop-blur-md">
            <Link
              className="p-5 xl:p-8 text-white font-bold hover:text-underline"
              onClick={() => scrollToElement("speakers", 800)}
            >
              SPEAKERS
            </Link>
            <Link
              className="p-5 xl:p-8 text-white font-bold hover:text-underline"
              onClick={() => scrollToElement("tickets", 1000)}
            >
              TICKETS
            </Link>
            <Link
              className="p-5 xl:p-8 text-white font-bold hover:text-underline"
              onClick={() => scrollToElement("partners", 1200)}
            >
              PARTNERS
            </Link>
            <Link
              className="p-5 xl:p-8 text-white font-bold hover:text-underline"
              onClick={() => scrollToElement("team", 1400)}
            >
              OUR TEAM
            </Link>
            <Link
              className="p-5 xl:p-8 text-white font-bold hover:text-underline"
              onClick={() => scrollToElement("faqs", 1600)}
            >
              FAQs
            </Link>
            <Link
              className="p-5 xl:p-8 text-white font-bold hover:text-underline"
              onClick={() => scrollToElement("contact", 1800)}
            >
              CONTACT
            </Link>
            <div className="relative inline-block bg-transparent text-white">
              <select
                value={selectedEvent}
                onChange={handleChange}
                className="bg-transparent mt-5 xl:p-8 text-white font-bold appearance-none outline-none cursor-pointer"
              >
                <option value="TEDxBVCOE25" className="text-black">
                  TEDxBVCOE25
                </option>
                <option value="TEDxBVCOE23" className="text-black">
                  TEDxBVCOE23
                </option>
                <option value="TEDxBVCOE22" className="text-black">
                  TEDxBVCOE22
                </option>
                <option value="TEDxBVCOE21" className="text-black">
                  TEDxBVCOE21
                </option>
              </select>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div id="hero" className="">
        {/* <img
          src={homeLogo}
          alt=""
          className="static sm:h-full h-screen w-full object-cover object-center items-center justify-center"
        /> */}

        <picture>
          {/* Image for larger screens (PC) */}
          <source srcSet={pcImage} media="(min-width: 640px)" />
          {/* Image for smaller screens (Mobile) */}
          <img
            src={mobileImage}
            alt=""
            className="h-screen w-full object-cover object-center"
          />
        </picture>

        <div className="top-20 z-10 bg-black lg:opacity-80 opacity-60 absolute sm:h-[1172px] h-screen w-full"></div>
        <div className="absolute flex sm:flex-row flex-col sm:top-80 top-40 w-full sm:justify-between sm:gap-0 gap-12 items-center pt-6 sm:px-13.5">
          <img src={heroImg1} alt="" className="sm:w-[500px] w-[300px] z-20" />
          {/* <img
            src={heroImgMobile}
            alt=""
            className="sm:invisible visible w-[300px] z-20"
          /> */}
          <div className="dates flex flex-col h-full justify-center sm:items-end items-start sm:pt-26 pt-10 z-20">
            <div className="flex h-full sm:gap-6 gap-7 sm:pl-0 pl-1">
              <img
                src={date}
                alt=""
                className="sm:h-[6rem] sm:w-[15rem] h-[40px]  w-[100px]"
              />
              <img
                src={april}
                alt=""
                height=""
                width=""
                className="sm:h-[5.8rem] sm:w-[25rem] h-[38px]  w-[166px]"
              />
            </div>
            <img
              src={year}
              alt=""
              height=""
              width=""
              className="sm:h-full sm:w-[50%] h-[100px]  w-[300px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const PassesButton = () => {
  return (
    <div className="sm:h-[400px] h-[200px] sm:pt-0 pt-36 w-full bg-black flex flex-col items-center">
      {/* <img src={year} alt="" width="" height="" className="h-58 w-full opacity-15" /> */}
      <div className="flex h-full items-center z-[100] pt-25">
        <Link onClick={() => scrollToElement("tickets", 1000)}>
          <button className="bg-gray-400 flex flex-row items-center justify-center gap-3 transition-all text-center text-xl text-black font-bold py-2 px-4 rounded-xl h-16 cursor-pointer ">
            GET PASSES NOW
            <img src={Passes_btn_heart} alt="" className="w-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const InfoButtons = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "TED",
      content1:
        "TED (Technology, Entertainment, Design) is a global platform that hosts conferences featuring influential speakers from various fields who share their innovative ideas and experiences. ",
      content2:
        "Founded in 1984, TED has become synonymous with Ideas Worth Spreading. The main TED conference is held annually in Vancouver, Canada, and its talks cover a wide range of topics, including science. ",
    },
    {
      title: "TEDx",
      content1:
        "TEDx events are independently organized TED-like conferences that can take place anywhere in the world. These events aim to bring the spirit of TED to local communities and provide a platform for individuals to share their unique ideas. ",
      content2:
        "TEDx talks cover a broad spectrum of subjects, often reflecting the unique challenges and innovations of a particular region. ",
    },
    {
      title: "TEDxBVCOE",
      content1:
        "TEDxBVCOE is a specific instance of a TEDx event affiliated with Bharati Vidyapeeth College of Engineering (BVCOE) in Delhi, India. Organized independently by a dedicated local team of volunteers, TEDxBVCOE serves as a platform for students, educators, and professionals to share their insights and ideas with the community. ",
      content2:
        "The BVCOE in TEDxBVCOE represents Bharati Vidyapeeth College of Engineering, the hosting institution. ",
    },
  ];

  return (
    // sm:h-[600px]
    <div className="flex relative w-full flex-col items-center justify-center lg:h-[800px] sm:h-[1000px] bg-black gap-0 lg:mt-[0rem] mt-[10rem]">
      <h1 className="info-heading text-white text-[40pt] font-bold top-0 uppercase">
        WHAT IS?
      </h1>

      <div className="flex flex-col items-center sm:w-[600px] w-full gap-4 bg-black text-white p-5">
        <div className="flex flex-wrap justify-center mb-4 gap-5 w-full">
          {items.map((item, index) => (
            <button
              key={index}
              className="bg-none text-white h-14 sm:px-8 px-2 py-2 items-center justify-center text-2xl font-[Helvetica] font-bold cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-10 transition-all duration-300 lg:w-[65rem] ${
              openIndex === index ? "max-h-40" : "max-h-0 overflow-hidden"
            }`}
          >
            <p className="text-white font-medium text-xl text-left font-[Helvetica]">
              {item.content1}
            </p>
            <div className="flex justify-end w-full">
              <div className="flex justify-end lg:w-[60rem]">
                <p className="text-white font-medium text-xl lg:text-left text-right font-[Helvetica]">
                  {item.content2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* yt Video */}

      {/* width="560" height="315" */}
      {/* <iframe
        src="https://www.youtube.com/embed/uNq8OJm8sA8?si=k_ujkofvwRfPYm41"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="lg:w-[68rem] lg:h-[40rem] h-[15rem] w-[22rem] lg:mt-[14rem] mt-[22rem] rounded-3xl"
      ></iframe> */}
    </div>
  );
};

const Speakers = () => {
  return (
    <>
      {/* min-h-[700px] */}
      <div
        id="speakers"
        className="min-h-full bg-black flex flex-col w-full sm:px-10  items-center gap-6 mt-[7rem]"
      >
        <h1 className="text-white text-3xl font-bold">SPEAKERS</h1>
        {/* <Link to="/continue">
          <button className="bg-[#FFF0D2] flex flex-row items-center justify-center gap-3 transition-all text-center text-xl text-black font-bold py-2 px-4 rounded-xl h-16 cursor-pointer">
            OUR SPEAKERS
            <img
              src={Arrow}
              alt=""
              className=""
              height="22"
              width="22"
              route="/continue"
            />
          </button>
        </Link> */}

        <div className="flex flex-col w-full sm:gap-16 px-6 gap-16 mt-10">
          <a href="https://www.linkedin.com/in/oli-ikechi/">
            <img
              src={Speaker1}
              alt=""
              className=" sm:h-[440px] w-full lg:rounded-3xl rounded-xl"
            />
          </a>
          <a href="https://www.linkedin.com/in/saakshar-duggal-7881aa228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img
              src={Speaker2}
              alt=""
              className=" sm:h-[440px] w-full lg:rounded-3xl rounded-xl"
            />
          </a>
          <a href="https://www.instagram.com/ria.mohta/">
            <img
              src={Speaker3}
              alt=""
              className=" sm:h-[440px] w-full lg:rounded-3xl rounded-xl"
            />
          </a>
          <a href="https://www.linkedin.com/in/sougata-bhattacharjee/">
            <img
              src={Speaker4}
              alt=""
              className=" sm:h-[440px] w-full lg:rounded-3xl rounded-xl"
            />
          </a>
          <a href="https://www.linkedin.com/in/lt-general-anil-kapoor/">
            <img
              src={Speaker5}
              alt=""
              className=" sm:h-[440px] w-full lg:rounded-3xl rounded-xl"
            />
          </a>
          <a href="https://www.linkedin.com/in/dr-varda-sardana-120b8684">
            <img
              src={Speaker6}
              alt=""
              className=" sm:h-[440px] w-full lg:rounded-3xl rounded-xl"
            />
          </a>
        </div>
      </div>
    </>
  );
};

const TicketBuying = () => {
  return (
    <>
      {/* min-h-screen */}
      <div
        id="tickets"
        className="bg-black min-h-screen flex flex-col w-full gap-8 items-center mt-25"
      >
        {/* <h1 className="text-white text-3xl font-bold">PASSES</h1> */}
        {/* <Link to="/continue">
          <button className="bg-[#FFF0D2] flex flex-row items-center justify-center gap-3 transition-all text-center text-xl text-black font-bold py-2 px-4 rounded-xl h-16 cursor-pointer">
            EVENT PASSES
            <img src={Arrow} alt="" className="" height="22" width="22" />
          </button>
        </Link> */}
        <h1 className="text-white text-4xl font-bold">AVAILABLE PASSES</h1>
        {/* <h1 className="text-white text-2xl">Click On The Tickets To Buy</h1> */}
        <h1 className="hidden sm:block text-white text-2xl">
          Click On The Tickets To Buy
        </h1>
        <h1 className="block sm:hidden text-white text-2xl">
          Tap On The Tickets To Buy
        </h1>
        <div className="flex flex-col sm:gap-16 px-6 gap-16">
          <a href="https://docs.google.com/forms/d/1uelLpfmfbci9HoVZST41mkswA31ITon-Z9gYPvrEFmU/edit">
            <img src={Ticket1} alt="" className=" sm:h-[440px] w-full" />
          </a>
          <a href="https://docs.google.com/forms/d/1uelLpfmfbci9HoVZST41mkswA31ITon-Z9gYPvrEFmU/edit">
            <img src={Ticket2} alt="" className=" sm:h-[440px] w-full" />
          </a>
          <a href="https://docs.google.com/forms/d/1uelLpfmfbci9HoVZST41mkswA31ITon-Z9gYPvrEFmU/edit">
            <img src={Ticket3} alt="" className=" sm:h-[440px] w-full" />
          </a>
          <a href="https://docs.google.com/forms/d/1uelLpfmfbci9HoVZST41mkswA31ITon-Z9gYPvrEFmU/edit">
            <img src={Ticket4} alt="" className=" sm:h-[440px] w-full" />
          </a>
          <a href="https://docs.google.com/forms/d/1uelLpfmfbci9HoVZST41mkswA31ITon-Z9gYPvrEFmU/edit">
            <img src={Ticket5} alt="" className=" sm:h-[440px] w-full" />
          </a>
        </div>

        <div className="flex flex-col h-full w-full gap-10 lg:pt-16 pt-20">
          <div>
            <h1 className="text-white font-bold text-2xl text-center">
              For any queries contact:
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
            <h1 className="text-white text-xl">
              Priyal Agarwal (+91 9136284851)
            </h1>
            <h1 className="text-white text-xl">
              Bhrigu Tayal (+91 79824 75557)
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

const Partners = () => {
  return (
    <>
      {/* h-fit */}
      <div
        id="partners"
        className="flex flex-col min-h-[300px] items-center justify-center sm:pb-0 pb-12 gap-10 bg-black mt-20"
      >
        <h1 className="text-white font-bold text-3xl">OUR PARTNERS</h1>
        {/* <Link to="/continue">
          <button className="bg-gray-400 flex flex-row items-center justify-center gap-3 transition-all text-center text-xl text-black font-bold py-2 px-4 rounded-xl h-16 cursor-pointer">
            PARTNERS REVEALING SOON
            <img src={Passes_btn_heart} alt="" className="w-4" />
          </button>
        </Link> */}

        <div className="flex lg:flex-row flex-col gap-40 items-center mt-20">
          <div className="">
            <img src={XTCY} className="lg:h-30 lg:w-60 h-25 w-50" alt="" />
          </div>
          <div className="">
            <img src={UniStyl} className="lg:h-30 lg:w-90 h-25 w-75" alt="" />
          </div>
          <div className="">
            <img src={farmley} className="lg:h-50 lg:w-60 h-45 w-55" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

const Team = () => {
  return (
    <>
      <div
        id="team"
        className="flex flex-col gap-20 h-full w-full bg-black p-10 mt-10"
      >
        <div className="w-full">
          <h1 className="text-3xl font-bold text-white text-center">
            OUR TEAM
          </h1>
        </div>

        {/* Organizers */}
        <div className="h-full w-full flex flex-col sm:flex-row p-10 gap-10 items-center justify-center pt-14">
          <div className="sm:w-2/5  text-center">
            <h1 className="text-white text-3xl font-bold sm:mb-0 mb-10">
              OUR ORGANIZERS
            </h1>
          </div>

          <div className="lg:w-3/5 w-full h-full flex flex-col sm:flex-row gap-30 items-center justify-center">
            <div class="group block text-center  lg:w-3/6 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div class="relative mb-5 h-full w-full">
                <a href="https://www.linkedin.com/in/reachparidhi">
                  <img
                    src={Paridhi}
                    alt="Marvin image"
                    class="w-70 h-70 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                  />
                </a>
              </div>
              <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                Paridhi Harit
              </h4>
              <span class="text-white text-center block transition-all duration-500 ">
                Organizer
              </span>
            </div>
            <div class="group block text-center lg:w-3/6 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div class="relative mb-5 h-full w-full">
                <a href="http://www.linkedin.com/in/ridhi-gupta07">
                  <img
                    src={Ridhi}
                    alt="Marvin image"
                    class="w-70 h-70 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                  />
                </a>
              </div>
              <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                Ridhi Gupta
              </h4>
              <span class="text-white text-center block transition-all duration-500 ">
                Co-Organizer
              </span>
            </div>
          </div>
        </div>

        {/* Core Team */}
        {/* <div className="w-full h-full">
          <section class="bg-black">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="flex justify-between items-center flex-col lg:flex-row md:mt-20">
                <div class="w-full lg:w-1/2">
                  <h2 class="w-full font-manrope text-3xl text-white text-center font-bold leading-[4rem] mb-7 lg:text-left lg:pl-14">
                    OUR CORE TEAM
                  </h2>
                </div>
                <div class="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
                  <div class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                    <img
                      // src="https://pagedone.io/asset/uploads/1696238644.png"
                      alt="Team tailwind section"
                      class="w-52 h-60 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 hover:border-red-600 hover:border-2"
                    />
                    <img
                      // src="https://pagedone.io/asset/uploads/1696238665.png"
                      alt="Team tailwind section"
                      class="w-52 h-60 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto hover:border-red-600 hover:border-2"
                    />
                    <img
                      // src="https://pagedone.io/asset/uploads/1696238684.png"
                      alt="Team tailwind section"
                      class="w-52 h-60 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0 hover:border-red-600 hover:border-2"
                    />
                    <img
                      // src="https://pagedone.io/asset/uploads/1696238702.png"
                      alt="Team tailwind section"
                      class="w-52 h-60 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto hover:border-red-600 hover:border-2"
                    />
                    <img
                      // src="https://pagedone.io/asset/uploads/1696238720.png"
                      alt="Team tailwind section"
                      class="w-52 h-60 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto hover:border-red-600 hover:border-2"
                    />
                    <img
                      // src="https://pagedone.io/asset/uploads/1696238737.png"
                      alt="Team tailwind section"
                      class="w-52 h-60 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 hover:border-red-600 hover:border-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}

        {/* Dept. Heads */}
        <div className="w-full h-full">
          <section class="py-24 ">
            <div class="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
              <div class="mb-20">
                <h2 class="font-manrope text-3xl text-center font-bold text-white mb-6">
                  DEPARTMENT HEADS
                </h2>
              </div>
              <div class="flex flex-wrap justify-center gap-y-24  max-w-3xl mx-auto lg:max-w-full ">
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                  <div class="relative mb-5">
                    <a href="https://www.linkedin.com/in/uday-pundeer-460580267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <img
                        src={Uday}
                        alt="Marvin image"
                        class="w-56 h-56 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                      />
                    </a>
                  </div>
                  <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                    Uday Singh Pundeer
                  </h4>
                  <span class="text-white text-center block transition-all duration-500 ">
                    Head of Productions
                  </span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                  <div class="relative mb-5">
                    {/* https://www.linkedin.com/in/abhinavkumarsingh1405 */}
                    <img
                      src={Abhinav}
                      alt="Kathryn image"
                      class="w-56 h-56 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                    />
                    {/* <a href="">
                    </a> */}
                  </div>
                  <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                    Abhinav Singh
                  </h4>
                  <span class="text-white text-center block transition-all duration-500 ">
                    Head of Productions
                  </span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                  <div class="relative mb-5">
                    <a href="https://www.linkedin.com/in/bhrigu-tayal-0aa469212/">
                      <img
                        src={Bhrigu}
                        alt="Jerome image"
                        class="w-56 h-56 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                      />
                    </a>
                  </div>
                  <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                    Bhrigu Tayal
                  </h4>
                  <span class="text-white text-center block transition-all duration-500 ">
                    Head of Operations
                  </span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                  <div class="relative mb-5">
                    <a href="https://www.linkedin.com/in/reach-priyalagarwal">
                      <img
                        src={Priyal}
                        alt="Wade image"
                        class="w-56 h-56 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                      />
                    </a>
                  </div>
                  <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                    Priyal Agarwal
                  </h4>
                  <span class="text-white text-center block transition-all duration-500 ">
                    Head of Operations
                  </span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                  <div class="relative mb-5">
                    {/* http://www.linkedin.com/in/harshvardhan-rajput-504b941b5 */}
                      <img
                        src={Harshvardhan}
                        alt="Leslie image"
                        class="w-56 h-56 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                      />
                    {/* <a href="">
                    </a> */}
                  </div>
                  <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                    Harshvardhan Singh Rajput
                  </h4>
                  <span class="text-white text-center block transition-all duration-500 ">
                    Head of Design and Creative
                  </span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                  <div class="relative mb-5">
                    <a href="https://www.linkedin.com/in/maitri-65b510257/">
                      <img
                        src={Maitri}
                        alt="Guy image"
                        class="w-56 h-56 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                      />
                    </a>
                  </div>
                  <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                    Maitri
                  </h4>
                  <span class="text-white text-center block transition-all duration-500 ">
                    Head of Content and Documentation
                  </span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                  <div class="relative mb-5">
                    <a href="https://www.linkedin.com/in/devansh-biswas-606666214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <img
                        src={Devansh}
                        alt="Ronald image"
                        class="w-56 h-56 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                      />
                    </a>
                  </div>
                  <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                    Devansh Biswas
                  </h4>
                  <span class="text-white text-center block transition-all duration-500 ">
                    Head of Publicity
                  </span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                  <div class="relative mb-5">
                    <a href="https://in.linkedin.com/in/dikkey-kumar-singh-36a6b12ab">
                      <img
                        src={Aditya_Singh}
                        alt="Devon image"
                        class="w-56 h-56 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                      />
                    </a>
                  </div>
                  <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                    Aditya Singh
                  </h4>
                  <span class="text-white text-center block transition-all duration-500 ">
                    Head of Publicity
                  </span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                  <div class="relative mb-5">
                    <a href="https://www.linkedin.com/in/reachshrivastav">
                      <img
                        src={Aditya_Shrivastav}
                        alt="Dianne image"
                        class="w-56 h-56 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                      />
                    </a>
                  </div>
                  <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                    Aditya Shrivastav
                  </h4>
                  <span class="text-white text-center block transition-all duration-500 ">
                    Head of Technical
                  </span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                  <div class="relative mb-5">
                    <a href="https://www.linkedin.com/in/aashima-bathla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                      <img
                        src={Aashima}
                        alt="Dianne image"
                        class="w-56 h-56 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-red-600"
                      />
                    </a>
                  </div>
                  <h4 class="text-xl text-white font-semibold text-center mb-2 transition-all duration-500 ">
                    Aashima Bathla
                  </h4>
                  <span class="text-white text-center block transition-all duration-500 ">
                    Head of Social Media
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const Merch = () => {
  return (
    <>
      <div className="min-h-[600px] bg-black flex flex-col w-full px-10 pt-20 items-center gap-20 overflow-hidden">
        <div>
          <h1 className="text-white text-3xl font-bold">OUR MERCH</h1>
        </div>

        <div className="flex flex-col items-center gap-20">
          {/* for polo */}
          <div className="polo flex sm:flex-row flex-col sm:gap-[10rem] gap-[5rem] m-2 space-y-2 justify-center items-center bg-black">
            <img src={polo_front} alt="" width="30%" height="60%" />
            <img src={polo_back} alt="" width="30%" height="60%" />
          </div>
          {/* for round neck */}
          <div className="round_neck flex sm:flex-row flex-col sm:gap-[10rem] gap-[5rem] m-2 space-y-2 justify-center items-center bg-black">
            <img src={round_neck_front} alt="" width="30%" height="60%" />
            <img src={round_neck_back} alt="" width="30%" height="60%" />
          </div>
        </div>
      </div>
    </>
  );
};

const FAQ = () => {
  return (
    <>
      <div
        id="faqs"
        className="bg-black w-full min-h-[400px] items-center pt-20 flex flex-col px-6"
      >
        <h1 className="text-white text-3xl font-bold pb-6">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="sm:w-3/5">
          <div className="flex flex-col gap-6 m-2 space-y-2 bg-black">
            <div
              className="min-h-15 group flex flex-col items-center justify-center gap-2 rounded-2xl bg-red-600 p-5 text-white w-full cursor-pointer"
              tabindex="1"
            >
              <div className="flex w-full cursor-pointer items-center justify-between">
                <span className="sm:text-3xl text-2xl font-bold">
                  What will be the venue of the event?
                </span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-5 transition-all duration-500 group-focus:-rotate-180"
                />
              </div>
              <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 sm:text-2xl text-xl w-9/10">
                The event will be hosted in offline mode within the premises of
                Bharati Vidyapeeth’s College of Engineering.
              </div>
            </div>

            <div
              className="min-h-20 group flex flex-col items-center gap-2 rounded-2xl bg-red-600 p-5 text-white w-full cursor-pointer"
              tabindex="2"
            >
              <div className="flex w-full cursor-pointer items-center justify-between">
                <span className="sm:text-3xl text-2xl font-bold">
                  How would I know my registration has been confirmed?
                </span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-5 transition-all duration-500 group-focus:-rotate-180"
                />
              </div>
              <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 sm:text-2xl text-xl w-9/10">
                You will receive the confirmation on your registered email from
                TEDxBVCOE’s official email ID.
              </div>
            </div>

            <div
              className="min-h-20 group flex flex-col items-center gap-2 rounded-2xl bg-red-600 p-5 text-white w-full cursor-pointer"
              tabindex="3"
            >
              <div className="flex w-full cursor-pointer items-center justify-between">
                <span className="sm:text-3xl text-2xl font-bold">
                  What if my payment for the registration of the event(s) gets
                  deducted from my account but did not receive any confirmation?
                </span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-5 transition-all duration-500 group-focus:-rotate-180"
                />
              </div>
              <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 sm:text-2xl text-xl w-9/10">
                You can contact us through your registered email on TEDxBVCOE
                official email ID (bvcoetedx@gmail.com).
              </div>
            </div>

            <div
              className="min-h-20 group flex flex-col items-center gap-2 rounded-2xl bg-red-600 p-5 text-white w-full cursor-pointer"
              tabindex="4"
            >
              <div className="flex w-full cursor-pointer items-center justify-between">
                <span className="sm:text-3xl text-2xl font-bold">
                  I made a mistake buying my pass for the event(s). What do I do
                  now?
                </span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-5 transition-all duration-500 group-focus:-rotate-180"
                />
              </div>
              <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 sm:text-2xl text-xl w-9/10">
                Reach out to us on bvcoetedx@gmail.com.
              </div>
            </div>
            <div
              className="min-h-20 group flex flex-col items-center gap-2 rounded-2xl bg-red-600 p-5 text-white w-full cursor-pointer"
              tabindex="5"
            >
              <div className="flex w-full cursor-pointer items-center justify-between">
                <span className="sm:text-3xl text-2xl font-bold">
                  Can I cancel my registration for the events I enrolled for? If
                  so, what is the process?
                </span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-5 transition-all duration-500 group-focus:-rotate-180"
                />
              </div>
              <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 sm:text-2xl text-xl w-9/10">
                Reach out to us on bvcoetedx@gmail.com.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer
        id="contact"
        className="flex flex-col gap-10 h-full w-full bg-black pt-20"
      >
        <div className="mx-auto w-full sm:max-w-full max-w-screen-xl px-10 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="flex flex-col gap-1 mb-6 md:mb-0">
              <a className="flex items-center">
                <img src={navLogo} alt="" className="w-70" />
              </a>
              <div className="flex sm:flex-row flex-col gap-4 text-white sm:text-justify text-justify pt-5">
                <div>
                  <p>Organizer: Paridhi Harit</p>
                  <p>(Paridhi.tedxbvcoe@gmail.com)</p>
                </div>
                <div>
                  <p>Co-organizer: Ridhi Gupta</p>
                  <p>(ridhig.047@gmail.com)</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  FOLLOW US
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/tedxbvcoe.2025/"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/tedx-bvcoe/posts/?feedView=all"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  LEGAL
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://drive.google.com/file/d/1sG8G_2TdXA6USHhFxA0zbNK6rTkoAjne/view?usp=drive_link"
                      className="hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1sEDSFgmHAFKGZyUfDQaCa_skWHfo8ILG/view?usp=drive_link"
                      className="hover:underline"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="text-gray-700my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:flex-row flex flex-col gap-2 sm:items-center sm:justify-between">
            <span className="flex gap-2 text-md text-gray-500 sm:text-center dark:text-gray-400">
              <div>@ 2025</div>
              <a href="" className="hover:underline">
                TEDxBVCOE
              </a>
              <div>. All Rights Reserved.</div>
            </span>
            <span className="flex gap-1.5 text-md text-grayc-500 sm:text-center dark:text-gray-400 mr-18">
              <div>Developed by</div>
              <div>
                <a
                  href="https://linktr.ee/Aditya__Shrivastav?utm_source=linktree_admin_share"
                  className="underline"
                >
                  Aditya Shrivastav
                </a>
              </div>
            </span>
            <div className="flex mt-4 sm:justify-center gap-6 items-center sm:mt-0">
              <a href="https://www.instagram.com/tedxbvcoe.2025/" className="">
                <img src={insta_logo} alt="" className="w-14" />
              </a>
              <a href="https://www.linkedin.com/company/tedx-bvcoe/posts/?feedView=all">
                <img src={linkedIn_logo} alt="" className="w-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const scrollToElement = (elementId, duration) => {
  const target = document.getElementById(elementId);
  if (!target) return;

  const startPosition = window.pageYOffset;
  const targetPosition = target.getBoundingClientRect().top + startPosition;
  const startTime = performance.now();

  const easeInOutQuad = (t) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animateScroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = easeInOutQuad(timeElapsed / duration);
    const run = progress * (targetPosition - startPosition) + startPosition;
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo(0, targetPosition);
    }
  };

  requestAnimationFrame(animateScroll);
};
