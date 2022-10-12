import React from "react";
import Option from "../Option/Option";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Questions = ({ ques }) => {
  const { id, question, options, correctAnswer } = ques;

  const showToastMessage = (correctAnswer) => {
    toast(correctAnswer, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleOption = (option, correctAnswer) => {
    console.log(option, correctAnswer);
    if (option === correctAnswer) {
      toast.info("Your Answer is Correct!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.info("Your Answer is Wrong!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div>
      <div className="w-7/12 mx-auto bg-pink-100">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl mb-3 pt-10 mx-auto text-purple-600 m-5  w-9/12">
            {question}
          </h1>
          <button onClick={() => showToastMessage(correctAnswer)}>
            <FontAwesomeIcon
              className="w-15 pt-8 pr-5 text-blue-900"
              icon={faEye}
            ></FontAwesomeIcon>
          </button>
          <ToastContainer />
        </div>
        <div className="grid grid-cols-2 container mx-auto w-96 gap-3 mb-5 pb-10">
          {options.map((option) => (
            <Option
              key={option.id}
              option={option}
              correctAnswer={correctAnswer}
              handleOption={handleOption}
            ></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
