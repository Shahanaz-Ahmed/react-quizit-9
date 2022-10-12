import React from "react";
import Option from "../Option/Option";

const Questions = ({ ques }) => {
  const { id, question, options } = ques;
  console.log(ques);
  return (
    <div>
      <div className="w-7/12 mx-auto bg-pink-100">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl mb-3 pt-10 mx-auto text-purple-600 m-5  w-9/12">
            {question}
          </h1>
          <a href="">
            <img
              className="w-12 pt-8 pr-5"
              src="https://img.icons8.com/parakeet/48/000000/experimental-visible-parakeet.png"
            />
          </a>
        </div>
        <div className="grid grid-cols-2 container mx-auto w-96 gap-3 mb-5 pb-10">
          {options.map((option, idx) => (
            <Option key={idx} option={option}></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
