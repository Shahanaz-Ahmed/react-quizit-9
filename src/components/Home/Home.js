import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="flex">
        <img
          className="ml-10 mt-9 mr-3 mb-0 w-4/12"
          src="https://media.istockphoto.com/photos/innovation-and-new-ideas-lightbulb-concept-with-question-mark-picture-id1399942260?k=20&m=1399942260&s=612x612&w=0&h=iTeGTIuNAwr4MFTZcHiYvj-dPsx1RvHK8tpEYtqldk8="
          alt=""
        />
        <h2 className="text-3xl font-bold mt-20 text-purple-500">
          There are different Types of quiz,for different courses
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-6 m-10 drop-shadow-xl rounded-md">
        {courses.data.map((course) => (
          <Courses key={course.id} course={course}></Courses>
        ))}
      </div>
    </div>
  );
};

export default Home;
