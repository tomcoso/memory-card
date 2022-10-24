// import { useState } from "react";
import styled from "styled-components";

const HeaderElem = styled.header`
  width: 100vw;
  height: 8vh;
  background-color: #0a0a11;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #fffce0;
`;

const Header = (props) => {
  return (
    <HeaderElem>
      <Title>Memory Cards</Title>
    </HeaderElem>
  );
};

export default Header;
