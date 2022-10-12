import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="flex lg:flex-row md:flex-row  sm: flex-col">
        <img
          className="lg:ml-20 md:ml-20 sm:m-5 mt-9 mb-0 lg:w-4/12 md:w-1/2 sm:w-full sm:flex sm:justify-center sm:items-center"
          src="https://media.istockphoto.com/photos/innovation-and-new-ideas-lightbulb-concept-with-question-mark-picture-id1399942260?k=20&m=1399942260&s=612x612&w=0&h=iTeGTIuNAwr4MFTZcHiYvj-dPsx1RvHK8tpEYtqldk8="
          alt=""
        />
        <div className="mt-10 mr-auto">
          <h2 className="text-3xl sm:text-center md:text-left md:ml-20  font-bold text-purple-500">
            There are different Types of quiz,for different courses.
          </h2>
          <div className="text-purple-500 sm:text-center md:text-left md:ml-20 md:w-9/12 sm:w-9/12">
            <p className="text-xl font-medium">
              Quickly assess student understanding with prepared activities or
              on-the-fly questions.You can test your skill here...
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 m-20 drop-shadow-xl rounded-md">
        {courses.data.map((course) => (
          <Courses key={course.id} course={course}></Courses>
        ))}
      </div>
    </div>
  );
};

export default Home;
