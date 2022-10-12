import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar w-full bg-purple-200 flex">
      <h1 className="my-4 text-5xl font-bold font-sans ml-20 drop-shadow-2xl text-purple-700">
        QuizIt
      </h1>
      <div onClick={() => setOpen(!open)} className="w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={`bg-purple-200 w-full md:flex justify-center duration-500 absolute md:static ${
          open ? "top-16" : "top-[-120px]"
        }`}
      >
        <li>
          <Link className="text-purple-700 text-2xl md:ml-96" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-purple-700 text-2xl md:ml-20 sm:ml-0"
            to="/quiz"
          >
            Quiz
          </Link>
        </li>
        <li>
          <Link
            className="text-purple-700 text-2xl md:ml-20 sm:ml-0"
            to="/statistics"
          >
            Statistics
          </Link>
        </li>
        <li>
          <Link
            className="text-purple-700 text-2xl md:ml-20 sm:ml-0"
            to="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
