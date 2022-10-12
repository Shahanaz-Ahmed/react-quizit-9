import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, correctAnswer, handleOption }) => {
  return (
    <div>
      <div class="form-check border-2 border-indigo-600">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onClick={() => handleOption(option, correctAnswer)}
        />
        <ToastContainer />
        <label class="form-check-label text" for="flexRadioDefault1">
          {option}
        </label>
      </div>
    </div>
  );
};

export default Option;
