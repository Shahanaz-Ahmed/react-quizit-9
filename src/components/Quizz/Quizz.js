import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quizz = () => {
  const quiz = useLoaderData();
  const { name, questions } = quiz.data;
  console.log(questions);
  return (
    <div>
      <h2 className="text-4xl font-bold text-purple-500 m-10">
        Quiz of {name}
      </h2>
      <div>
        {questions.map((ques) => (
          <Questions key={ques.id} ques={ques}></Questions>
        ))}
      </div>
    </div>
  );
};

export default Quizz;
