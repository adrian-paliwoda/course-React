import { useState, useEffect } from "react";

const defaultInterval = 100;

export default function QuestionTimer({ onTimeout, timeoutForAnswer = 15000 }) {
  const [remainingTime, setRemainingTime] = useState(timeoutForAnswer);

  useEffect(() => {
    const timeout = setTimeout(onTimeout, timeoutForAnswer);

    return () => {
      clearTimeout(timeout);
    };
  }, [onTimeout, timeoutForAnswer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - defaultInterval);
    }, defaultInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeoutForAnswer} value={remainingTime} />;
}
