import React from "react";
import "./index.css";
// import navLogo from "../../Tedx-Website/src/assets/navLogo.svg";
// import homeLogo from "../../Tedx-Website/src/assets/homeLogo.svg";
// import heroImg1 from "../../Tedx-Website/src/assets/heroImg1.svg";
// import heroImgMobile from "../../Tedx-Website/src/assets/heroImgMobile.svg";
// import heroImg2 from "../../Tedx-Website/src/assets/heroImg2.svg";
// import navMobileMenu from "../../Tedx-Website/src/assets/navMobileMenu.svg";
// import year from "../../Tedx-Website/src/assets/2025.svg";
// import Passes_btn_heart from "../../Tedx-Website/src/assets/Passes_btn_heart.png";
// import infoButtonImgLeft from "../../Tedx-Website/src/assets/infoButtonImgLeft.svg";
// import infoButtonImgRight from "../../Tedx-Website/src/assets/infoButtonImgRight.svg";
// import infoButtonImgLeftMobile from "../../Tedx-Website/src/assets/infoButtonImgLeftMobile.svg";
// import infoButtonImgRightMobile from "../../Tedx-Website/src/assets/infoButtonImgRightMobile.svg";
// import card1Img from "../../Tedx-Website/src/assets/card1Img.webp";
// import card2Img from "../../Tedx-Website/src/assets/card2Img.webp";
// import card3Img from "../../Tedx-Website/src/assets/card3Img.webp";
// import card4Img from "../../Tedx-Website/src/assets/card4Img.webp";
// import card5Img from "../../Tedx-Website/src/assets/card5Img.webp";
// import Arrow from "../../Tedx-Website/src/assets/Arrow.png";
// import Ticket1 from "../../Tedx-Website/src/assets/Ticket_1.svg";
// import Ticket2 from "../../Tedx-Website/src/assets/Ticket_2.svg";
// import Ticket3 from "../../Tedx-Website/src/assets/Ticket_3.svg";
// import insta_logo from "../../Tedx-Website/src/assets/insta_logo.png";
// import linkedIn_logo from "../../Tedx-Website/src/assets/linkedIn_logo.png";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PassesButton />
      <InfoButtons />
      <Speakers />
      <TicketBuying />
      <Partners />
      <FAQ />
      <Footer />
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
          {/* <img src={navLogo} alt="" className="w-[14rem]" /> */}
          {/* <svg src={navLogo} alt="" className="w-[14rem]" /> */}
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
          {/* <img src={navLogo} alt="" width="134" height="30" /> */}
        </a>
        {/* <img
          src={navMobileMenu}
          alt=""
          className="w-[28px] object-contain text-white"
        /> */}
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
        {/* <img
          src={homeLogo}
          alt=""
          className="static sm:h-full h-screen w-full object-cover object-center items-center justify-center"
        /> */}
        <div className="top-20 z-10 bg-black opacity-80 absolute sm:h-[1172px] h-screen w-full"></div>
        <div className="absolute flex sm:flex-row flex-col sm:top-80 top-40 w-full sm:justify-evenly sm:gap-0 gap-24 items-center">
          {/* <img src={heroImg1} alt="" className="sm:w-[500px] w-[300px] z-20" /> */}
          {/* <img
            src={heroImgMobile}
            alt=""
            className="sm:invisible visible w-[300px] z-20"
          /> */}
          {/* <img
            src={heroImg2}
            alt=""
            className="sm:w-[500px] sm:visible invisible w-[300px] z-20"
          /> */}
        </div>
      </div>
    </>
  );
};

const PassesButton = () => {
  return (
    <div className="sm:h-[480px] h-[250px] w-full bg-black flex flex-col items-center">
      {/* <img src={year} alt="" width="1682" height="250" className="" /> */}
      <div className="flex h-full items-center">
        <a href="">
          <button className="bg-gray-400 flex flex-row items-center justify-center gap-3 transition-all text-center text-xl text-black font-bold py-2 px-4 rounded-xl h-16">
            GET PASSES NOW
            {/* <img src={Passes_btn_heart} alt="" className="w-4" /> */}
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
        {/* <img
          src={infoButtonImgLeft}
          alt=""
          height="450"
          width="450"
          className="absolute sm:visible invisible left-0 -top-20"
        /> */}
        {/* <img
          src={infoButtonImgRight}
          alt=""
          height="450"
          width="450"
          className="absolute sm:visible invisible right-0 -top-20"
        /> */}
        {/* <img
          src={infoButtonImgLeftMobile}
          alt=""
          width="190"
          height="500"
          className="left-0 absolute sm:invisible visible top-36"
        /> */}
        {/* <img
          src={infoButtonImgRightMobile}
          alt=""
          width="190"
          height="500"
          className="right-0 absolute sm:invisible visible top-36"
        /> */}
        <h1 className=" text-white text-2xl font-bold top-0 uppercase">
          WHAT IS TED?
        </h1>
        <div className=" flex flex-row items-center justify-center gap-4">
          <button className="bg-none text-white sm:h-16 h-14 sm:px-8 px-4 py-2 items-center justify-center border-2 border-white rounded-xl font-bold">
            TED
          </button>
          <button className="bg-none text-white sm:h-16 h-14 sm:px-8 px-4 py-2 items-center justify-center border-2 border-white rounded-xl font-bold">
            TEDx
          </button>
          <button className="bg-white text-black sm:h-16 h-14 sm:px-8 px-4 py-2 items-center justify-center border-2 border-white rounded-xl font-bold">
            TEDxBVCOE
          </button>
        </div>
        <div className=" sm:w-[600px] font-medium px-10">
          <p className="flex text-white text-xl sm:text-justify text-justify">
            TED (Technology, Entertainment, Design) is a global platform that
            hosts conferences featuring influential speakers from various fields
            who share their innovative ideas and experiences. Founded in 1984,
            TED has become synonymous with "Ideas Worth Spreading." The main TED
            conference is held annually in Vancouver, Canada, and its talks
            cover a wide range of topics, including science.
          </p>
          <p className="hidden text-white text-xl sm:text-justify text-justify">
            TEDx events are independently organized TED-like conferences that
            can take place anywhere in the world. These events aim to bring the
            spirit of TED to local communities and provide a platform for
            individuals to share their ideas and perspectives. TEDx talks cover
            a broad spectrum of subjects, often reflecting the unique challenges
            and innovations of a particular region. year.
          </p>
          <p className="hidden text-white text-xl sm:text-justify text-justify">
            TEDxBVCOE is a specific instance of a TEDx event affiliated with
            Bharati Vidyapeeth College of Engineering (BVCOE) in Delhi, India.
            Organized independently by a dedicated local team of volunteers,
            TEDxBVCOE serves as a platform for students, educators, and
            professionals to share their insights and ideas with the community.
            The "BVCOE" in TEDxBVCOE represents Bharati Vidyapeeth College of
            Engineering, the hosting institution.
          </p>
        </div>
      </div>
    </>
  );
};

const Speakers = () => {
  return (
    <>
      <div className="min-h-[700px] bg-black flex flex-col w-full px-10 items-center gap-6">
        <h1 className="text-white text-3xl font-bold">SPEAKERS</h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-12 items-center justify-center">
          <div className=" sm:h-[400px] h-[360px] w-80 flex flex-col items-center justify-center gap-4 border border-white rounded-2xl px-4 bg-[#000E24]">
            {/* <img
              src={card1Img}
              alt=""
              width="100"
              height="100"
              className="rounded-full h-40 w-40 object-cover"
            /> */}
            <div className="text-3xl font-bold text-[#D74D26]">
              Vivek Rathod
            </div>
            <div className="text-2xl text-[#FFF0D2] text-center">
              CEO- Excitel, Entrepreneur
            </div>
          </div>
          <div className=" sm:h-[400px] h-[360px] w-80 flex flex-col items-center justify-center gap-4 border border-white rounded-2xl px-4 bg-[#000E24]">
            {/* <img
              src={card2Img}
              alt=""
              width="100"
              height="100"
              className="rounded-full h-40 w-40 object-cover"
            /> */}
            <div className="text-3xl font-bold text-[#D74D26]">
              Sonendra Verma
            </div>
            <div className="text-2xl text-[#FFF0D2] text-center">
              CEO, Aegis Covenant
            </div>
          </div>
          <div className=" sm:h-[400px] h-[360px] w-80 flex flex-col items-center justify-center gap-4 border border-white rounded-2xl px-4 bg-[#000E24]">
            {/* <img
              src={card3Img}
              alt=""
              width="100"
              height="100"
              className="rounded-full h-40 w-40 object-cover"
            /> */}
            <div className="text-3xl font-bold text-[#D74D26]">
              Dr. Akriti Khatri
            </div>
            <div className="text-2xl text-[#FFF0D2] text-center">Detective</div>
          </div>
          <div className=" sm:h-[400px] h-[360px] w-80 flex flex-col items-center justify-center gap-4 border border-white rounded-2xl px-4 bg-[#000E24]">
            {/* <img
              src={card4Img}
              alt=""
              width="100"
              height="100"
              className="rounded-full h-40 w-40 object-cover"
            /> */}
            <div className="text-3xl font-bold text-[#D74D26]">Khalid Wani</div>
            <div className="text-2xl text-[#FFF0D2] text-center">
              Marketing Guru
            </div>
          </div>
          <div className=" sm:h-[400px] h-[360px] w-80 flex flex-col items-center justify-center gap-4 border border-white rounded-2xl px-4 bg-[#000E24]">
            {/* <img
              src={card5Img}
              alt=""
              width="100"
              height="100"
              className="rounded-full h-40 w-40 object-cover"
            /> */}
            <div className="text-3xl font-bold text-[#D74D26]">
              Umesh Rathod
            </div>
            <div className="text-2xl text-[#FFF0D2] text-center">
              Startup Mentor
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TicketBuying = () => {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col w-full gap-8 items-center pt-20">
        <a href="">
          <button className="bg-[#FFF0D2] flex flex-row items-center justify-center gap-3 transition-all text-center text-xl text-black font-bold py-2 px-4 rounded-xl h-16">
            BUY PASSES NOW
            <img src={Arrow} alt="" className="" height="22" width="22" />
          </button>
        </a>
        <h1 className="text-white text-4xl font-bold">AVAILABLE PASSES</h1>
        <div className="flex flex-col sm:gap-16 px-6 gap-16">
          {/* <img src={Ticket1} alt="" className=" sm:h-[440px] w-full" /> */}
          {/* <img src={Ticket2} alt="" className=" sm:h-[440px] w-full" /> */}
          {/* <img src={Ticket3} alt="" className=" sm:h-[440px] w-full" /> */}
        </div>
      </div>
    </>
  );
};

const Partners = () => {
  return (
    <>
      <div className="flex flex-col h-fit items-center gap-10 bg-black pt-20">
        <h1 className="text-white font-bold text-3xl">OUR PARTNERS</h1>
        <button className="bg-gray-400 flex flex-row items-center justify-center gap-3 transition-all text-center text-xl text-black font-bold py-2 px-4 rounded-xl h-16">
          PARTNERS REVEALING SOON
          {/* <img src={Passes_btn_heart} alt="" className="w-4" /> */}
        </button>
      </div>
    </>
  );
};

const FAQ = () => {
  return (
    <>
      <div className="bg-black w-full min-h-[400px] items-center flex flex-col pt-20 px-6">
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
                {/* <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-5 transition-all duration-500 group-focus:-rotate-180"
                /> */}
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
                {/* <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-5 transition-all duration-500 group-focus:-rotate-180"
                /> */}
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
                {/* <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-5 transition-all duration-500 group-focus:-rotate-180"
                /> */}
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
                {/* <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-5 transition-all duration-500 group-focus:-rotate-180"
                /> */}
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
                {/* <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-5 transition-all duration-500 group-focus:-rotate-180"
                /> */}
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
      <footer className="flex flex-col gap-10 h-full w-full bg-black pt-20">
        <div className="mx-auto w-full sm:max-w-full max-w-screen-xl px-10 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
              <div className=" mb-6 md:mb-0">
                <a className="flex items-center">
                  {/* <img src={navLogo} alt="" className="w-70" /> */}
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    FOLLOW US
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="" className="hover:underline">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:underline">
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
                      <a href="" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:underline">
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
            <span className="flex gap-1.5 text-md text-grayc-500 sm:text-center dark:text-gray-400">
              <div>Developed by</div>
              <div>
                <a href="" className="underline">
                  Aditya Shrivastav
                </a>
              </div>
            </span>
            <div className="flex mt-4 sm:justify-center gap-6 items-center sm:mt-0">
              <a href="" className="">
                {/* <img src={insta_logo} alt="" className="w-14"/> */}
              </a>
              <a href="">
                {/* <img src={linkedIn_logo} alt="" className="w-8"/> */}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
