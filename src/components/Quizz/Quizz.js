import React from "react";
import { useLoaderData } from "react-router-dom";

const Quizz = () => {
  const quiz = useLoaderData();
  const { id, name, question, options } = quiz.data;
  console.log(quiz);
  return (
    <div>
      <h2>Quiz for {quiz.data.name}</h2>
      <div>
        <p>{quiz.data.questions[0].question}</p>
        <h2>{quiz.data.questions[0].options[0]}</h2>
        <h2>{quiz.data.questions[0].options[1]}</h2>
        <h2>{quiz.data.questions[0].options[2]}</h2>
        <h2>{quiz.data.questions[0].options[3]}</h2>
      </div>
      <div>
        <p>{quiz.data.questions[1].question}</p>
        <h2>{quiz.data.questions[1].options[0]}</h2>
        <h2>{quiz.data.questions[1].options[1]}</h2>
        <h2>{quiz.data.questions[1].options[2]}</h2>
        <h2>{quiz.data.questions[1].options[3]}</h2>
      </div>
      <div>
        <p>{quiz.data.questions[2].question}</p>
        <h2>{quiz.data.questions[2].options[0]}</h2>
        <h2>{quiz.data.questions[2].options[1]}</h2>
        <h2>{quiz.data.questions[2].options[2]}</h2>
        <h2>{quiz.data.questions[2].options[3]}</h2>
      </div>
      <div>
        <p>{quiz.data.questions[3].question}</p>
        <h2>{quiz.data.questions[3].options[0]}</h2>
        <h2>{quiz.data.questions[3].options[1]}</h2>
        <h2>{quiz.data.questions[3].options[2]}</h2>
        <h2>{quiz.data.questions[3].options[3]}</h2>
      </div>
    </div>
  );
};

export default Quizz;
