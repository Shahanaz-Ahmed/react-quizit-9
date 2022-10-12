import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="flex lg:flex-row md:flex-row sm: flex-col">
        <img
          className="ml-20 mt-9 mr-10 mb-0 lg:w-4/12 md:w-1/2 "
          src="https://media.istockphoto.com/photos/innovation-and-new-ideas-lightbulb-concept-with-question-mark-picture-id1399942260?k=20&m=1399942260&s=612x612&w=0&h=iTeGTIuNAwr4MFTZcHiYvj-dPsx1RvHK8tpEYtqldk8="
          alt=""
        />
        <div>
          <h2 className="text-3xl font-bold mt-20 text-purple-500 lg:text-center md:text-left sm:text-left">
            There are different Types of quiz,for different courses.
          </h2>
          <div className="container m-10 mt-2 text-left text-purple-500">
            <p className="text-xl text-left font-medium">
              Quickly assess student understanding with prepared activities or
              on-the-fly questions.
              <p className="text-xl text-left font-medium ">
                You can test your skill here...
              </p>
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
