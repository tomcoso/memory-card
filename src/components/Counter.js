import styled from "styled-components";

const Score = styled.div`
  padding: 5px 10px;
  font-size: 1.3rem;
`;

const Level = styled.div`
  padding: 5px 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Counter = (props) => {
  return (
    <>
      <Level>Level {props.level + 1}</Level>
      <Score>Score: {props.score}</Score>
      <Score>High Score: {props.highScore}</Score>
    </>
  );
};

export default Counter;
