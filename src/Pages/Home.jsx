import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/mainHero.png';
import heroSectionBG from '../assets/heroBg.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* =========== navbar component is here ===========  */}
      <Navbar />

      {/* ========= home page content is here =======  */}
      <div className="w-full max-w-300 m-auto">
        <div className="w-full relative mt-20 h-full">
          {/* ----------- main hero text -------------  */}
          <div className="w-full absolute left-0 bottom-6 z-4 sm:bottom-10">
            <h2 className="text-center text-amber-300 font-black tracking-widest text-[40px] italic sm:text-6xl xl:text-7xl">
              MERN STACK
            </h2>
            <h3 className="text-center text-slate-50 text-xl font-bold -mt-2 tracking-wide sm:text-3xl sm:mt-0 xl:text-4xl">
              Engineered From Scratch.
            </h3>
            <p className="text-center text-xs text-slate-50 sm:text-base xl:mt-1 xl:text-lg">
              Specializing in
              <span className="text-amber-200 ml-1">
                MongoDB • Express • React • Node.js
              </span>{' '}
            </p>
          </div>
          {/* ------ white fog effect -------- */}
          <div className="w-full h-[15%] bg-linear-to-t from-white via-slate-50/30 to-transparent absolute left-0 bottom-0 z-5"></div>
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
          <div className="w-[55%] h-[80%] sm:w-[57%] sm:h-[83%] md:w-[58%] lg:hidden absolute z-2 top-0 right-0">
            <svg
              viewBox="0 0 500 300"
              preserveAspectRatio="none"
              className="w-full h-full absolute -top-20 z-2 right-0 sm:w-full sm:h-full md:w-full font-mono"
            >
              <polygon points="220,0 500,0 500,300 0,300" fill="#d11110" />
            </svg>
            <div className=" absolute -top-8 right-0 z-3 h-auto text-center pr-1 pb-10 font-serif widermobile:pr-3 widermobile:-top-6 maxmobile:pr-1 lg:-top-2 xl:pr-8">
              <p className="text-2xl transform scale-y-150 origin-top mb-3 text-white/40 maxmobile:text-[30px] ultrapromobile:text-[35px] sm:text-5xl bigscreentab:text-[55px] lg:text-[60px]">
                I Have the
              </p>
              <p className="text-3xl text-amber-300/40 font-bold transform scale-y-190 origin-top -mt-3 maxmobile:text-4xl promobile:text-[40px] ultrapromobile:text-[45px] sm:text-6xl md:text-[70px] bigscreentab:text-[80px] lg:text-[90px] lg:-mt-4">
                SKILLS
              </p>
              <p className="text-xl text-white/40 mt-5 maxmobile:text-[25px] ultrapromobile:mt-6 md:text-[30px] md:mt-8 bigscreentab:text-4xl bigscreentab:mt-10 lg:text-[45px] lg:mt-12 transform scale-y-130 origin-top">
                to Build your
              </p>
              <p className="text-2xl text-white/40  maxmobile:text-[30px] ultrapromobile:text-[35px] md:text-5xl lg:text-[55px] transform scale-y-150 origin-top -mt-1 mb-3">
                Vision
              </p>
              <p className="text-3xl font-bold text-white/40 transform scale-y-190 origin-top -mt-3 maxmobile:text-4xl promobile:text-[40px] ultrapromobile:text-[45px] sm:text-6xl md:text-[70px] bigscreentab:text-[80px] lg:text-[90px]">
                ONLINE
              </p>
            </div>
          </div>
          {/* --- lg break ponit right ----  */}
          <div className="hidden lg:block lg:w-[55%] lg:h-[85%] absolute z-2 top-0 right-0">
            <svg
              viewBox="0 0 500 300"
              preserveAspectRatio="none"
              className="hidden lg:block absolute -top-20 z-2 right-0 lg:w-full lg:h-full"
            >
              <polygon points="170,0 500,0 500,300 0,300" fill="#d11110" />
            </svg>
            <div className=" absolute -top-8 right-0 z-3 h-auto text-center pr-1 pb-10 font-serif widermobile:pr-3 widermobile:-top-6 maxmobile:pr-1 lg:-top-2 xl:pr-8">
              <p className="text-2xl text-white/40 maxmobile:text-[30px] ultrapromobile:text-[35px] sm:text-5xl bigscreentab:text-[55px] lg:text-[60px]">
                I Have the
              </p>
              <p className="text-3xl text-amber-300/40 font-bold transform scale-y-170 origin-top -mt-3 maxmobile:text-4xl promobile:text-[40px] ultrapromobile:text-[45px] sm:text-6xl md:text-[70px] bigscreentab:text-[80px] lg:text-[90px] lg:-mt-4">
                SKILLS
              </p>
              <p className="text-xl text-white/40 mt-4 maxmobile:text-[25px] ultrapromobile:mt-6 md:text-[30px] md:mt-8 bigscreentab:text-4xl bigscreentab:mt-10 lg:text-[45px] lg:mt-12">
                to Build your
              </p>
              <p className="text-2xl text-white/40  maxmobile:text-[30px] ultrapromobile:text-[35px] md:text-5xl lg:text-[55px]">
                Vision
              </p>
              <p className="text-3xl font-bold text-white/40 transform scale-y-170 origin-top -mt-3 maxmobile:text-4xl promobile:text-[40px] ultrapromobile:text-[45px] sm:text-6xl md:text-[70px] bigscreentab:text-[80px] lg:text-[90px]">
                ONLINE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =============== home section text =============  */}
      <div className="pt-10 lg:pt-15">
        <p className="text-center text-sm text-[#d11110] font-bold tracking-[4px]">
          I BUILD MODERN
        </p>
        <h2 className="text-center text-4xl tracking-wide text-gray-800 font-bold mt-2">
          Web Experiences
        </h2>
        <h3 className="text-center text-4xl tracking-wide mt-1 font-bold text-[#d11110]">
          That Matter.
        </h3>
        <p className="text-center text-base w-70 m-auto mt-3 text-gray-500">
          Transforming ideas into fast, secure and scalable web applications.
        </p>
        {/* -------- button ---------  */}
        <Link className="flex items-center justify-center gap-2 bg-[#d11110] w-65 h-12 text-center content-center m-auto mt-8 mb-10 text-white font-semibold rounded-lg group hover:bg-[#c21111]">
          <p>View Projects</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 mt-0.5 group-hover:translate-x-2 duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-8 h-8 m-auto block animate-bounce"
        >
          {/* --- Main Outer Body --- */}
          <rect
            x="88"
            y="16"
            width="336"
            height="480"
            rx="168"
            fill="none"
            stroke="#d1111090"
            strokeWidth="25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* --- Center Line --- */}
          <line
            x1="256"
            y1="16"
            x2="256"
            y2="300"
            stroke="#d1111090"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* --- Scroll Wheel --- */}
          <rect
            x="216"
            y="96"
            width="80"
            height="130"
            rx="40"
            fill="#ffffff"
            stroke="#d1111090"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-center text-[10px] font-bold tracking-[5px] mt-2 text-gray-400">
          SCROLL DOWN
        </p>
      </div>
    </div>
  );
};

export default Home;
