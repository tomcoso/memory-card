import { useEffect, useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import Gameboard from "./Gameboard";
import EndPanel from "./EndPanel";

const Main = styled.main`
  width: 100vw;
  min-height: 84vh;
  height: min-content;
  padding: 30px;
  background-color: #eee;
`;

const Game = (props) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStage, setGameStage] = useState("play");

  useEffect(() => {
    if (gameStage === "play") {
      if (score === 12) {
        setGameStage("win");
      }
      if (score >= highScore) {
        setHighScore(score);
      }
    }
  }, [score, highScore, gameStage]);

  const addToScore = () => {
    setScore(score + 1);
  };

  const handleEnd = () => {
    setScore(0);
    setGameStage("lose");
  };

  const restart = () => {
    setGameStage("play");
    setScore(0);
  };

  return (
    <Main>
      <EndPanel stage={gameStage} restart={restart} />
      <Counter score={score} highScore={highScore} />
      <Gameboard addToScore={addToScore} handleEnd={handleEnd} />
    </Main>
  );
};

export default Game;
