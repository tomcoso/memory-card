import styled, { keyframes } from "styled-components";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

const anim = keyframes`
  0% {box-shadow: 0px 0px 15px -5px #fffce0}
  50% {box-shadow: 0px 0px 15px 5px #4cb5f4}
  100% {box-shadow: 0px 0px 15px -5px #fffce0}
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MidPanel = styled.div`
  padding: 40px;
  background-color: #0a0a11;
  display: flex;
  gap: 10px;
  flex-direction: column;
  border-radius: 5px;
  animation: ${anim} 2s linear infinite;
`;

const MainMsg = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  padding: 10px;
  color: #fffce0;
`;
const Button = styled.button`
  padding: 5px 10px;
  font-size: 1.8rem;
  background-color: #0a0a11;
  border: 2px solid #fffce0;
  color: #fffce0;
  cursor: grab;

  &:active {
    box-shadow: inset 0px 0px 5px 0px #fffce0;
  }
`;

const EndPanel = (props) => {
  switch (props.stage) {
    case "lose":
      return ReactDOM.createPortal(
        <Overlay>
          <MidPanel>
            <MainMsg>You Lose!</MainMsg>
            <Button onClick={props.restart}>Restart</Button>
          </MidPanel>
        </Overlay>,
        root
      );
    case "win":
      return ReactDOM.createPortal(
        <Overlay>
          <MidPanel>
            <MainMsg>You Win!</MainMsg>
            <Button onClick={props.restart}>Restart</Button>
          </MidPanel>
        </Overlay>,
        root
      );
    default:
      return null;
  }
};

export default EndPanel;
