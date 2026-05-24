import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/mainHero.png';
import heroSectionBG from '../assets/heroBg.jpg';

const Home = () => {
  return (
    <div>
      {/* =========== navbar component is here ===========  */}
      <Navbar />

      {/* ========= home page content is here =======  */}
      <div className="w-full max-w-300 m-auto">
        <div className="w-full h-auto relative mt-20">
          <img
            className="w-full h-180 object-cover absolute inset-0 z-1 sm:h-130 sm:w-full sm:m-auto lg:h-170 xl:h-190"
            src={heroSectionBG}
            alt="hero section background"
          />
          <img
            className="w-full h-180 object-cover relative z-3 sm:h-130 sm:w-90 sm:m-auto lg:h-170 lg:w-115 xl:h-190 xl:w-130"
            src={heroImage}
            alt="Hero image"
          />

          {/* ---------- left svg ------  */}
          <svg
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
            className="w-[95%] h-25 absolute bottom-0 left-0 z-4 sm:z-2 sm:w-[40%] sm:h-45 sm:bottom-60 lg:w-[39%] lg:h-60 lg:bottom-80 xl:h-65"
          >
            <polygon points="0,0 500,0 420,300 0,300" fill="#e31e24" />
          </svg>

          {/* ---------- right svg ------- */}
          {/* --- mobile right ----  */}
          <svg
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
            className="w-[80%] h-115 absolute -top-20 z-2 right-0 sm:hidden"
          >
            <polygon points="180,0 500,0 500,300 0,300" fill="#d11110" />
          </svg>
          {/* --- mini tab right ----  */}
          <svg
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
            className="hidden sm:block absolute -top-20 z-2 right-0 sm:visible sm:w-[53%] sm:h-110 lg:w-[53%] lg:h-140 xl:h-160"
          >
            <polygon points="160,0 500,0 500,300 0,300" fill="#d11110" />
          </svg>

        </div>
      </div>
    </div>
  );
};

export default Home;
