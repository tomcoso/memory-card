import { useEffect, useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import Gameboard from "./Gameboard";
import EndPanel from "./EndPanel";
import Transition from "./Transition";

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
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (gameStage === "play") {
      if (score === 40) {
        setGameStage("win");
      }
      if (score >= highScore) {
        setHighScore(score);
      }
    }
  }, [score, highScore, gameStage]);

  const addToScore = () => {
    setScore(score + 1);
    switch (score + 1) {
      case 4:
        setLevel(1);
        break;
      case 10:
        setLevel(2);
        break;
      case 18:
        setLevel(3);
        break;
      case 28:
        setLevel(4);
        break;
      default:
    }
  };

  const handleEnd = () => {
    setScore(0);
    setLevel(0);
    setGameStage("lose");
  };

  const restart = () => {
    setGameStage("play");
    setScore(0);
    setLevel(0);
  };

  return (
    <Main>
      <Transition level={level} />
      <EndPanel stage={gameStage} restart={restart} />
      <Counter score={score} highScore={highScore} level={level} />
      <Gameboard addToScore={addToScore} handleEnd={handleEnd} level={level} />
    </Main>
  );
};

export default Game;
