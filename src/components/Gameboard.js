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
  grid: min-content / repeat(auto-fit, 180px);
  gap: 20px;
  place-content: center;
`;

const Gameboard = (props) => {
  const getCards = () => {
    const pics = [
      { url: hartnell, name: "William Hartnell", color: "#8e8e98" },
      { url: eccleston, name: "Christopher Eccleston", color: "#ffdf01" },
      { url: colinBaker, name: "Colin Baker", color: "#012e58" },
      { url: tennant, name: "David Tennant", color: "#66cc9a" },
      { url: pertwee, name: "David Pertwee", color: "#012e58" },
      { url: smith, name: "Matt Smith", color: "#f3abb6" },
      { url: troughton, name: "Patrick Troughton", color: "#f3abb6" },
      { url: mcgann, name: "Paul McGann", color: "#00a1c7" },
      { url: capaldi, name: "Peter Capaldi", color: "#ff6634" },
      { url: davidson, name: "Peter Davidson", color: "#66cc9a" },
      { url: mccoy, name: "Silvester MacCoy", color: "#ff5814" },
      { url: tomBaker, name: "Tom Baker", color: "#00a1c7" },
    ];
    let res = [];
    for (let i = 0; i < 12; i++) {
      const item = {
        id: uniqid(),
        name: pics[i].name,
        url: pics[i].url,
        color: pics[i].color,
      };
      res.push(item);
    }
    return res;
  };

  const getLevels = () => {
    const levels = [];
    let i = 4;
    while (i <= 12) {
      let cardsCopy = cards.slice();
      let j = i;
      const lvl = [];
      while (j > 0) {
        lvl.push(
          ...cardsCopy.splice([parseInt(Math.random() * cardsCopy.length)], 1)
        );
        j--;
      }
      levels.push(lvl);
      i += 2;
    }
    return levels;
  };

  const cards = useState(getCards())[0];
  const levels = useState(getLevels())[0];
  const [clicked, setClicked] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);

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

  const shuffle = () => {
    const shuffledCards = [];
    const level = levels[props.level].slice();
    let i = level.length;
    while (i > 0) {
      shuffledCards.push(...level.splice(parseInt(Math.random() * i), 1));
      i--;
    }
    setShuffledCards(shuffledCards);
  };

  useEffect(shuffle, [levels, clicked, props.level]);

  useEffect(() => {
    setClicked([]);
  }, [props.level]);

  return (
    <Wrapper>
      {shuffledCards.map((card) => (
        <Card info={card} onSelection={onSelection} key={card.id} />
      ))}
    </Wrapper>
  );
};

export default Gameboard;
