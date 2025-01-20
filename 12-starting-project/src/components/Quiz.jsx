import { useCallback, useState, useRef } from "react";
import questions from "../questions";

import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplate = activeQuestionIndex >= questions.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prev) => {
        return [...prev, selectedAnswer];
      });
    },
    []
  );

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

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleTimeout}
      />
    </div>
  );
}
