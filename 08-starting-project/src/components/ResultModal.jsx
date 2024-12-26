export default function ResultModal({ ref, result, targetTime }) {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <h2>Your score: </h2>

      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}