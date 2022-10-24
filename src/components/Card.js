import styled, { keyframes } from "styled-components";

const anim = keyframes`
  0% {box-shadow: 0px 0px 15px -5px #fffce0}
  50% {box-shadow: 0px 0px 15px -2px #4cb5f4}
  100% {box-shadow: 0px 0px 15px -5px #fffce0}
`;

const pop = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

const Wrap = styled.div`
  height: min-content;
  width: min-content;
  border: 2px solid #000;
  border-radius: 10px;
  overflow: hidden;
  animation-name: ${pop};
  animation-duration: 800ms;
  animation-iteration-count: 1;

  &:hover {
    box-shadow: 0px 0px 15px -5px #f4f7cf;
    animation-name: ${pop}, ${anim};
    animation-duration: 800ms, 1s;
    animation-iteration-count: 1, infinite;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 190px;
  object-fit: cover;
  object-position: top;
`;

const Title = styled.p`
  margin-top: -3px;
  border-top: 2px solid #000;
  padding: 3px 5px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  box-shadow: inset 0px -2px 5px -1px #000;
`;

const Card = (props) => {
  return (
    <Wrap
      className="card"
      id={props.info.id}
      onClick={props.onSelection}
      color={props.info.color}
    >
      <Img src={props.info.url} alt={props.info.name} />
      <Title color={props.info.color}>{props.info.name} </Title>
    </Wrap>
  );
};

export default Card;
