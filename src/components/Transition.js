import styled from "styled-components";
import ReactDOM from "react-dom";
import { useLayoutEffect, useState } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 5rem;
  font-weight: bold;
  position: relative;
  color: #fffce0;
`;

const Transition = (props) => {
  const [panel, setPanel] = useState(null);

  useLayoutEffect(() => {
    if (props.level === 0) return;
    setPanel(
      <Overlay id="new-level">
        <Title id="level-title">level {props.level + 1}</Title>
      </Overlay>
    );

    setTimeout(() => {
      setPanel(null);
    }, 1000);
  }, [props.level]);

  return ReactDOM.createPortal(panel, document.getElementById("root"));
};

export default Transition;
