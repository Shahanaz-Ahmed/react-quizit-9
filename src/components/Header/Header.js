import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar bg-purple-200 flex">
      <div>
        <h1 className="my-4 text-5xl font-bold font-sans ml-20 drop-shadow-2xl text-purple-700">
          QuizIt
        </h1>
      </div>

      <div className="navbar-link mt-4 text-2xl mr-20">
        <Link className="text-purple-700" to="/">
          Home
        </Link>
        <Link className="text-purple-700" to="/quiz">
          Quiz
        </Link>
        <Link className="text-purple-700" to="/statistics">
          Statistics
        </Link>
        <Link className="text-purple-700" to="/blog">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Header;
