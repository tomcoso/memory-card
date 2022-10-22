import { useEffect, useState } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import Card from "./Card";
import hartnell from "../assets/william-hartnell.jpg";
import eccleston from "../assets/christopher-eccleston.jpg";
import colinBaker from "../assets/colin-baker.jpg";
import tennant from "../assets/david-tennant.jpg";
import pertwee from "../assets/jon-pertwee.jpg";
import smith from "../assets/matt-smith.jpg";
import troughton from "../assets/patrick-troughton.jpg";
import mcgann from "../assets/paul-mcgann.jpg";
import capaldi from "../assets/peter-capaldi.jpg";
import davidson from "../assets/peter-davidson.jpg";
import mccoy from "../assets/silvester-mccoy.jpg";
import tomBaker from "../assets/tom-baker.jpg";

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid: min-content / repeat(auto-fill, 250px);
  gap: 20px;
  place-content: center;
`;

const Gameboard = (props) => {
  const [clicked, setClicked] = useState([]);

  const cardsGen = (() => {
    const pics = [
      { url: hartnell, name: "William Hartnell" },
      { url: eccleston, name: "Christopher Eccleston" },
      { url: colinBaker, name: "Colin Baker" },
      { url: tennant, name: "David Tennant" },
      { url: pertwee, name: "David Pertwee" },
      { url: smith, name: "Matt Smith" },
      { url: troughton, name: "Patrick Troughton" },
      { url: mcgann, name: "Paul McGann" },
      { url: capaldi, name: "Peter Capaldi" },
      { url: davidson, name: "Peter Davidson" },
      { url: mccoy, name: "Silvester MacCoy" },
      { url: tomBaker, name: "Tom Baker" },
    ];
    let res = [];
    for (let i = 0; i < 12; i++) {
      const item = { id: uniqid(), name: pics[i].name, url: pics[i].url };
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
