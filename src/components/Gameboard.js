import { useEffect, useState } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import Card from "./Card";

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid: min-content / repeat(auto-fill, 150px);
  gap: 20px;
  place-content: center;
`;

const Gameboard = (props) => {
  const [clicked, setClicked] = useState([]);

  const cardsGen = (() => {
    let res = [];
    for (let i = 0; i < 12; i++) {
      const item = { id: uniqid(), name: `Card ${i}`, url: "" };
      res.push(item);
    }
    return res;
  })();
  const cards = useState(cardsGen)[0];

  const onSelection = (e) => {
    const clickedCard = e.nativeEvent.path[0].id
      ? e.nativeEvent.path[0].id
      : e.nativeEvent.path[1].id;

    for (let card of clicked) {
      if (clickedCard === card) {
        setClicked([]);
        props.handleEnd();
        return;
      }
    }
    props.addToScore();

    const newClicked = clicked.concat(clickedCard);
    setClicked(newClicked);
    shuffle();
  };

  const [shuffledCards, setShuffledCards] = useState([]);

  const shuffle = () => {
    const shuffledCards = [];
    const cardsCopy = cards.slice();
    let i = 12;
    while (i > 0) {
      shuffledCards.push(...cardsCopy.splice(parseInt(Math.random() * i), 1));
      i--;
    }
    setShuffledCards(shuffledCards);
  };

  useEffect(shuffle, [cards, clicked]);

  return (
    <Wrapper>
      {shuffledCards.map((card) => (
        <Card info={card} onSelection={onSelection} key={card.id} />
      ))}
    </Wrapper>
  );
};

export default Gameboard;
