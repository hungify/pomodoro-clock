import styled, { css } from "styled-components";
import { GlobalMixin } from "../../styles/mixin";
import Button from "../Button";
interface SessionProps {
  decrementSession: () => void;
  incrementSession: () => void;
  sessionLength: number;
  started: boolean;
}

function Session(props: SessionProps) {
  const { incrementSession, decrementSession, sessionLength, started } = props;

  return (
    <SessionContainer>
      <SessionLabel>Session Length</SessionLabel>
      <SessionConTrol>
        <ButtonIncrement started={started} onClick={incrementSession}>
          +
        </ButtonIncrement>
        <SessionName>{sessionLength}</SessionName>
        <ButtonDecrement sessionLength={sessionLength} started={started} onClick={decrementSession}>
          -
        </ButtonDecrement>
      </SessionConTrol>
    </SessionContainer>
  );
}

export default Session;

const SessionMixin = css`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 600;
  color: "#0a1d37";
`;

const SessionContainer = styled.div`
  width: 40%;
`;

const SessionLabel = styled.p`
  ${SessionMixin}
`;

const SessionConTrol = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

interface INCRButton {
  started: boolean;
}

const ButtonIncrement = styled(Button)<INCRButton>`
  ${GlobalMixin.button};
  ${(props) =>
    props.started &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    `}
`;

const SessionName = styled.p`
  ${SessionMixin}
`;

interface DECRButton {
  started: boolean;
  sessionLength: number;
}

const ButtonDecrement = styled(Button)<DECRButton>`
  ${(props) =>
    (props.started || props.sessionLength === 1) &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    `}
`;
