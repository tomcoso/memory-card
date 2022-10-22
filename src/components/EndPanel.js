import styled from "styled-components";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
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
  background-color: #fff;
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-shadow: 0px 5px 10px 0px #000;
  border-radius: 5px;
`;

const MainMsg = styled.p`
  font-size: 2rem;
  font-weight: bold;
  padding: 10px;
`;
const Button = styled.button`
  padding: 5px 10px;
  font-size: 1.3rem;
  background-color: #fff;
  border: 2px solid #000;

  &:active {
    box-shadow: inset 0px 0px 5px 0px #000;
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
