import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((a) => {
        const isSelected = selectedAnswer === a;
        let classes = "";
        if (answerState === "answered" && isSelected) {
          classes = "selected";
        }

        if (
          isSelected &&
          (answerState === "correct" || answerState === "wrong")
        ) {
          classes = answerState;
        }

        return (
          <li className="answer" key={a}>
            <button className={classes} onClick={() => onSelect(a)} disabled={answerState !== ''}>
              {a}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
