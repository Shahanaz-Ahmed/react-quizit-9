import React from "react";

const Option = ({ option }) => {
  return (
    <div>
      <div class="form-check border-2 border-indigo-600 h-full w-full">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label text-center" for="flexRadioDefault1">
          {option}
        </label>
      </div>
    </div>
  );
};

export default Option;
