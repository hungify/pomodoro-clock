import styled, { css } from "styled-components";
import { GlobalMixin } from "../../styles/mixin";
import Button from "../Button";

interface BreakProps {
  breakLength: number;
  decrementBreak: () => void;
  incrementBreak: () => void;
  started: boolean;
}

function Break(props: BreakProps) {
  const { incrementBreak, decrementBreak, breakLength, started } = props;
  return (
    <BreakContainer>
      <BreakLabel className="break__label">Break Length</BreakLabel>

      <BreakConTrol>
        <ButtonIncrement onClick={incrementBreak} started={started}>
          +
        </ButtonIncrement>
        <BreakName>{breakLength}</BreakName>
        <ButtonDecrement breakLength={breakLength} started={started} onClick={decrementBreak}>
          -
        </ButtonDecrement>
      </BreakConTrol>
    </BreakContainer>
  );
}

export default Break;

const BreakMixin = css`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 600;
  color: "#0a1d37";
`;

const BreakContainer = styled.div`
  width: 40%;
`;

const BreakLabel = styled.p`
  ${BreakMixin}
`;

const BreakConTrol = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 25px;
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

const BreakName = styled.p`
  ${BreakMixin}
`;

interface DECRButton {
  started: boolean;
  breakLength: number;
}

const ButtonDecrement = styled(Button)<DECRButton>`
  ${(props) =>
    (props.started || props.breakLength === 1) &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    `}
`;
