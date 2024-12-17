import Player from "./Player";

export default function Players({activePlayer, handlePlayerNameChange}) {
  return (
    <ol id="players" className="highlight-player">
      <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
      <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
    </ol>
  );
}
