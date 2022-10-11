import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar bg-purple-200 flex">
      <div>
        <h1 className="my-4 text-5xl font-bold font-sans ml-20 drop-shadow-2xl">
          QuizIt
        </h1>
      </div>

      <div className="navbar-link mt-4 text-2xl mr-20">
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
