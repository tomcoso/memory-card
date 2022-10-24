import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const FooterElem = styled.footer`
  width: 100vw;
  height: 5vh;
  background-color: #0a0a11;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Gh = styled.a`
  width: 20px;
  height: 20px;
`;

const Portfolio = styled.a`
  color: #fffce0;
  font-size: 1.1rem;
  text-decoration: none;
`;

const Footer = (props) => {
  return (
    <FooterElem>
      <Gh href="https://github.com/tomcoso/memory-card" target="_blank">
        <FaGithub size="20px" color="#fffce0" />
      </Gh>
      <Portfolio href="#">tomcoso</Portfolio>
    </FooterElem>
  );
};

export default Footer;
