import styled from "styled-components";

const Wrap = styled.div`
  height: min-content;
  width: min-content;
  border: 2px solid #000;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 10px 0px ${(props) => props.color};
  }
`;

const Img = styled.img`
  width: 180px;
  height: 250px;
  object-fit: cover;
  object-position: top;
`;

const Title = styled.p`
  margin-top: -3px;
  border-top: 2px solid #000;
  padding: 3px 5px;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  height: 3rem;
  background-color: ${(props) => props.color};
`;

const Card = (props) => {
  return (
    <Wrap
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
