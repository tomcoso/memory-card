import styled from "styled-components";

const Score = styled.div`
  padding: 5px 10px;
  font-size: 1.3rem;
`;

const Counter = (props) => {
  return (
    <>
      <Score>Score: {props.score}</Score>
      <Score>High Score: {props.highScore}</Score>
    </>
  );
};

export default Counter;