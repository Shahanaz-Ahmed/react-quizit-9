import React from "react";
import "./Courses.css";

const Courses = ({ course }) => {
  const { name, logo } = course;
  return (
    <div>
      <img className="bg-pink-100" src={logo} alt="" />
      <div className="flex course-details justify-between ">
        <h2 className="text-2xl font-medium">{name}</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Courses;
