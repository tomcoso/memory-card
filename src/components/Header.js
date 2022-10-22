// import { useState } from "react";
import styled from "styled-components";

const HeaderElem = styled.header`
  width: 100vw;
  height: 8vh;
  background-color: #ccc;
  display: grid;
  grid: 1fr / 1fr repeat(2, min-content);
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const Header = (props) => {
  return (
    <HeaderElem>
      <Title>Memory Cards</Title>
    </HeaderElem>
  );
};

export default Header;
