import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/mainLogo.png'

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div className="w-full max-w-300 m-auto px-3 py-2 fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between h-auto">
      {/* ========== My Logo ========== */}
      <Link className="flex gap-1 items-center sm:gap-1.5" to="/">
        <img
          className="w-7 h-7 sm:w-9  sm:h-9 object-cover"
          src={logo}
          alt="My portfolio lOogo"
        />
        <div className="w-full h-9 flex flex-col sm:h-11">
          <h3 className="text-sm font-black text-[#d11110] sm:text-base">
            Sudipto Das
          </h3>
          <p className="text-xs text-[#d11110] sm:text-sm">Web Developer</p>
        </div>
      </Link>

      {/* ========== nav links ========  */}
      <nav>
        {/* ======== mobile menu button =======  */}
        <div onClick={() => setIsNavbarOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            class="size-8 text-white cursor-pointer lg:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>

        <div
          onClick={() => setIsNavbarOpen(false)}
          className={`${isNavbarOpen ? 'visible' : 'hidden'} fixed inset-0 w-full h-screen bg-black/20 backdrop-blur-xs transition-all duration-700`}
        ></div>

        {/* ======== mobile menu and desktop nemu ========  */}
        <ul
          className={`w-60 h-screen flex flex-col gap-10 lg:gap-8.5 xl:gap-12 bg-linear-to-br from-[#d11110] to-[#8b0000] fixed top-0 ${isNavbarOpen ? 'right-0 opacity-100' : '-right-60 sm:-right-75 md:-right-85 opacity-0'} lg:opacity-100 p-10 sm:w-75 md:w-85 lg:bg-none lg:static lg:h-11 lg:flex-row lg:items-center lg:w-auto lg:right-0 transition-all duration-700 `}
        >
          <div
            onClick={() => setIsNavbarOpen(false)}
            className="w-17 h-6 flex bg-white rounded-sm items-center justify-center gap-0.5 cursor-pointer lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5 text-[#d11110]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-xs font-bold  text-[#d11110]">Close</p>
          </div>
          <Link
            className="text-white font-bold lg:text-[#d11110] xl:font-bold group relative lg:text-sm"
            to="/"
          >
            Home
            {/* left to right hover animation */}
            <span className=" absolute left-0 bottom-0 w-full h-0.5 bg-[#d11110] transition-transform duration-300 ease-in-out scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
          </Link>
          <Link
            className="text-white font-bold lg:text-[#d11110] xl:font-bold group relative lg:text-sm"
            to="/about"
          >
            About
            {/* left to right hover animation */}
            <span className=" absolute left-0 bottom-0 w-full h-0.5 bg-[#d11110] transition-transform duration-300 ease-in-out scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
          </Link>
          <Link
            className="text-white font-bold xl:text-white xl:font-bold group lg:text-sm relative"
            to="skills/"
          >
            Skills
            {/* left to right hover animation */}
            <span className=" absolute left-0 bottom-0 w-full h-0.5 bg-white transition-transform duration-300 ease-in-out scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
          </Link>
          <Link
            className="text-white font-bold xl:text-white xl:font-bold group lg:text-sm relative"
            to="/projects"
          >
            Projects
            {/* left to right hover animation */}
            <span className=" absolute left-0 bottom-0 w-full h-0.5 bg-white transition-transform duration-300 ease-in-out scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
          </Link>
          <Link
            className="text-white font-bold xl:text-white lg:text-sm xl:font-bold group relative"
            to="/contact"
          >
            Contact
            {/* left to right hover animation */}
            <span className=" absolute left-0 bottom-0 w-full h-0.5 bg-white transition-transform duration-300 ease-in-out scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
          </Link>
          <Link
            to="/details"
            className="w-30 h-10 lg:w-25 lg:h-8 border border-white rounded-sm flex items-center justify-center gap-1 xl:hover:bg-white group lg:text-sm"
          >
            <p className="text-white font-bold xl:font-bold xl:group-hover:text-[#d11110]">
              Details
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white xl:group-hover:text-[#d11110]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar