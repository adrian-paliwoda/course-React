import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(null);

  const [enteredPlanerName, setEnteredPlanerName] = useState(null);

  function handleClick() {
    setEnteredPlanerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlanerName ?? "unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
