import styled, { css } from "styled-components";
import { GlobalMixin } from "../../styles/mixin";
import { mediaDevices } from "../../styles/styledConstants";
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

const SessionContainer = styled.div`
  margin-top: 30px;
  width: 40%;
  @media ${mediaDevices.mobileL} {
    width: 100%;
  }
`;

const SessionLabel = styled.div`
  ${GlobalMixin.labelName}
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

const SessionName = styled.div`
  ${GlobalMixin.labelName}
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
