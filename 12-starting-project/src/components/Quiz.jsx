import { useCallback, useState } from "react";
import questions from "../questions";
import QuestionTimer from "./QuestionTimer";

import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplate = activeQuestionIndex >= questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  const handleTimeout = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplate) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy item" />
        <h2>Quiz completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} timeoutForAnswer="1000" onTimeout={handleTimeout} />
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((a) => (
            <li className="answer" key={a}>
              <button onClick={() => handleSelectAnswer(a)}>{a}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
