import styled, { css } from "styled-components";
import { GlobalMixin } from "../../styles/mixin";
import { mediaDevices } from "../../styles/styledConstants";
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

const BreakContainer = styled.div`
  margin-top: 30px;
  width: 40%;
  @media ${mediaDevices.mobileL} {
    width: 100%;
  }
`;

const BreakLabel = styled.div`
  ${GlobalMixin.labelName}
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

const BreakName = styled.div`
  ${GlobalMixin.labelName}
  ${GlobalMixin.labelName}
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
