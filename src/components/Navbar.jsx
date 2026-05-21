import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/mainLogo.png'

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div className="w-full max-w-300 m-auto px-3 py-2 relative flex items-center justify-between">
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
            class="size-8 text-[#d11110] cursor-pointer xl:hidden"
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
          className={`${isNavbarOpen ? 'visible' : 'hidden'} fixed inset-0 w-full h-screen bg-black/20 backdrop-blur-xs`}
        ></div>

        {/* ======== mobile menu and desktop nemu ========  */}
        <ul
          className={`w-60 h-screen flex flex-col gap-10 bg-linear-to-br from-[#d11110] to-[#8b0000] fixed top-0 ${isNavbarOpen ? 'right-0 opacity-100' : '-right-60 sm:-right-75 lg:-right-85 opacity-0'} xl:opacity-100 p-10 sm:w-75 lg:w-85 xl:bg-none xl:static xl:h-11 xl:flex-row xl:items-center xl:w-auto xl:right-0 transition-all duration-700`}
        >
          <div
            onClick={() => setIsNavbarOpen(false)}
            className="w-17 h-6 flex bg-white rounded-sm items-center justify-center gap-0.5 cursor-pointer xl:hidden"
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
            className="text-white font-bold xl:text-[#d11110] xl:font-semibold"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white font-bold xl:text-[#d11110] xl:font-semibold"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-white font-bold xl:text-[#d11110] xl:font-semibold"
            to="skills/"
          >
            Skills
          </Link>
          <Link
            className="text-white font-bold xl:text-[#d11110] xl:font-semibold"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-white font-bold xl:text-[#d11110] xl:font-semibold"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            to="/details"
            className="w-30 h-10 border border-white rounded-sm flex items-center justify-center gap-1 xl:border-[#d11110] "
          >
            <p className="text-white font-bold xl:text-[#d11110] xl:font-semibold">
              Details
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white xl:text-[#d11110]"
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