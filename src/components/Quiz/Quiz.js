import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";

const Quiz = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h1 className="font-bold text-3xl text-purple-500 mt-20">
        Take Your Quiz
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 m-20 drop-shadow-xl rounded-md">
        {courses.data.map((course) => (
          <Courses key={course.id} course={course}></Courses>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
