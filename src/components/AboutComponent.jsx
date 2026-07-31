import React from 'react';
import aboutImage from '../assets/homeAbout.jpg';

// --------- all svg image import here --------- 
import bootStrap from '../assets/Bootstrap.svg'
import css from '../assets/CSS.svg'
import expressJs from '../assets/ExpressJS-Dark.svg'
import html from '../assets/HTML.svg'
import js from '../assets/JavaScript.svg'
import mongoDB from '../assets/MongoDB.svg'
import nextJs from '../assets/NextJS-Light.svg'
import nodeJs from '../assets/NodeJS-Light.svg'
import npm from '../assets/Npm-Light.svg'
import react from '../assets/React-Light.svg'
import redux from '../assets/Redux.svg'
import scss from '../assets/Sass.svg'
import tailwindCss from '../assets/TailwindCSS-Light.svg'
import ts from '../assets/TypeScript.svg'


const AboutComponent = () => {
  const skillIconArray = [
    { iconImg: nodeJs, iconName: 'Node.js' },
    { iconImg: expressJs, iconName: 'Express.js' },
    { iconImg: mongoDB, iconName: 'MongoDB' },
    { iconImg: react, iconName: 'React' },
    { iconImg: nextJs, iconName: 'Next.js' },
    { iconImg: ts, iconName: 'TypeScript' },
    { iconImg: js, iconName: 'JavaScript' },
    { iconImg: redux, iconName: 'Redux' },
    { iconImg: tailwindCss, iconName: 'Tailwind' },
    { iconImg: scss, iconName: 'Sass' },
    { iconImg: bootStrap, iconName: 'Bootstrap' },
    { iconImg: css, iconName: 'CSS' },
    { iconImg: html, iconName: 'HTML' },
    { iconImg: npm, iconName: 'NPM' },
  ];

  const duplicatedSkills = [...skillIconArray, ...skillIconArray];

  return (
    <div>
      {/* ---------- about image & description section --------- */}
      <div className="w-full max-w-270 m-auto my-10 relative">
        <div className="w-full sm:grid sm:grid-cols-2 p-3">
          <div>
            <img className="w-full sm:w-full" src={aboutImage} />
          </div>
          {/* ------- about description --------- */}
          <div className="mt-5 sm:mt-2 lg:mt-5">
            <div className="mx-5">
              <h2 className="text-5xl tracking-widest sm:-ml-20 md:text-6xl lg:-ml-30 lg:text-7xl">
                DESIGN
              </h2>
              <h2 className="text-5xl ml-10 tracking-widest mt-2 sm:ml-0 md:text-6xl lg:text-7xl lg:mt-2">
                CULTURE
              </h2>
              {/* ------- about text ---------  */}
              <div>
                <div>
                  <p className="text-xl font-semibold mt-4 mb-2 lg:text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus quidem similique ad.
                  </p>
                  <button className="p-2.5 px-5 text-white text-sm tracking-widest bg-gray-800 my-5 rounded-md cursor-pointer">
                    EXPLORE COLLECTION
                  </button>
                </div>
                <div className="sm:absolute sm:-bottom-23 sm:w-[90%] sm:left-8 md:-bottom-27 lg:static lg:mt-5">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    libero architecto quas modi necessitatibus amet accusantium
                    voluptas fugiat error dolores!
                  </p>
                  <button className="mt-5 text-xs underline text-gray-400 cursor-pointer">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------- about section skill icons ---------------  */}
      <div className="w-full max-w-270 m-auto my-10 relative px-3 flex items-center gap-6 sm:mt-30 md:mt-35 lg:mt-0 lg:px-15">
        {/* ----- left div -----  */}
        <div className="w-15 h-15 bg-amber-300 flex items-center justify-center relative shrink-0 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>

          <div className="absolute w-15 h-15 border-2 -top-3 left-3 pointer-events-none"></div>
        </div>

        {/* ----- right div ---------  */}
        <div className="w-full overflow-hidden no-scrollbar">
          <div className="animate-infinite-scroll flex gap-2 py-2">
            {duplicatedSkills.map((icon, index) => (
              <div
                key={index}
                className="skill-icon-item flex items-center justify-center flex-col shrink-0 min-w-16"
              >
                <img
                  className="w-8 h-8 min-w-8 min-h-8 object-contain shrink-0"
                  src={icon.iconImg}
                  alt={icon.iconName}
                />
                <p className="text-[11px] mt-1 whitespace-nowrap">
                  {icon.iconName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
