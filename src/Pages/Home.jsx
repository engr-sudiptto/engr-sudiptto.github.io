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
        <div className="w-full relative mt-20 h-full">
          <img
            className="w-full h-110 sm:h-130 lg:h-150 absolute bottom-0 object-cover z-1"
            src={heroSectionBG}
            alt="hero section background"
          />
          <img
            className="w-[65%] sm:w-[50%] h-full m-auto bottom-0 object-cover z-3 relative md:w-[45%] lg:w-[40%]"
            src={heroImage}
            alt="Hero image"
          />

          {/* =========== left svg ============  */}
          {/* --- mobile left ----  */}
          <svg
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
            className="w-[40%] h-[34%] absolute bottom-40 left-0 z-2 widermobile:bottom-45 maxmobile:bottom-50 promobile:bottom-54 ultrapromobile:bottom-60 sm:hidden"
          >
            <polygon points="0,0 460,0 350,300 0,300" fill="#e31e24" />
          </svg>
          {/* --- mini tab left ----  */}
          <svg
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
            className="hidden sm:block absolute left-0 z-2 sm:bottom-50 sm:w-[41%] sm:h-[36%] md:hidden"
          >
            <polygon points="0,0 500,0 360,300 0,300" fill="#e31e24" />
          </svg>
          {/* --- bog tab left ----  */}
          <svg
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
            className="hidden md:block absolute left-0 z-2 md:w-[41%] md:h-[37%] md:bottom-53 lg:hidden"
          >
            <polygon points="0,0 500,0 370,300 0,300" fill="#e31e24" />
          </svg>
          {/* --- lg break ponit right ----  */}
          <svg
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
            className="hidden lg:block absolute left-0 z-2 lg:w-[42%] lg:h-[43%] lg:bottom-55 xl:bottom-60"
          >
            <polygon points="0,0 500,0 390,300 0,300" fill="#e31e24" />
          </svg>

          {/* ============ right svg =========== */}
          {/* --- mobile right ----  */}
          <svg
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
            className="w-[55%] h-[95%] absolute -top-20 z-2 right-0 sm:w-[57%] sm:h-[85%] md:w-[58%] lg:hidden"
          >
            <polygon points="220,0 500,0 500,300 0,300" fill="#d11110" />
          </svg>
          {/* --- lg break ponit right ----  */}
          <svg
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
            className="hidden lg:block absolute -top-20 z-2 right-0 lg:w-[55%] lg:h-[85%]"
          >
            <polygon points="170,0 500,0 500,300 0,300" fill="#d11110" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
