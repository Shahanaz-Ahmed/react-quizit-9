import React from "react";
import { Link } from "react-router-dom";

const Courses = ({ course }) => {
  const { id, name, logo } = course;
  return (
    <div>
      <img className="bg-pink-100" src={logo} alt="" />
      <div className="flex course-details justify-between ">
        <h2 className="lg:text-2xl md:text-xl font-medium">{name}</h2>
        <Link to={`/home/${id}`}>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
