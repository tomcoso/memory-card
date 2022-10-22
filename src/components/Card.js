import styled from "styled-components";

const Wrap = styled.div`
  height: min-content;
  width: min-content;
  border: 2px solid #000;
  border-radius: 10px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 180px;
  height: 250px;
  object-fit: cover;
  object-position: top;
`;

const Card = (props) => {
  return (
    <Wrap id={props.info.id} onClick={props.onSelection}>
      <Img src={props.info.url} alt={props.info.name} />
      <p>{props.info.name} </p>
    </Wrap>
  );
};

export default Card;
