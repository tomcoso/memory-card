import styled from "styled-components";

const Score = styled.div`
  padding: 5px 10px;
  font-size: 1.5rem;
  color: #fffce0;
`;

const Level = styled.div`
  padding: 5px 10px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #fffce0;
  text-align: center;
`;

const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 20px;
`;

const Counter = (props) => {
  return (
    <>
      <Level>Level {props.level + 1}</Level>
      <Container>
        <Score>Score: {props.score}</Score>
        <Score>High Score: {props.highScore}</Score>
      </Container>
    </>
  );
};

export default Counter;
