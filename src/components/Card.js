import styled from "styled-components";

const Wrap = styled.div`
  height: 150px;
  width: 100px;
  border: 2px solid #000;
  border-radius: 10px;
`;

const Card = (props) => {
  return (
    <Wrap id={props.info.id} onClick={props.onSelection}>
      <img src={props.info.url} alt={props.info.name} />
      <p>{props.info.name} </p>
    </Wrap>
  );
};

export default Card;
