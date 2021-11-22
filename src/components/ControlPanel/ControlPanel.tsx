import styled, { css } from "styled-components";
import { GlobalMixin } from "../../styles/mixin";

interface ControlPanelProps {
  started: boolean;
  onStop: () => void;
  onStart: () => void;
  onReset: () => void;
}

function ControlPanel(props: ControlPanelProps) {
  const { started, onStop, onReset, onStart } = props;

  return (
    <ControlPanelContainer className="control_panel">
      <ButtonAction started={started} onClick={started ? onStop : onStart}>
        {started ? "Stop" : "Start"}
      </ButtonAction>
      <ButtonReset onClick={onReset} started={!started}>
        Reset
      </ButtonReset>
    </ControlPanelContainer>
  );
}

export default ControlPanel;

const ControlPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

interface BTN {
  started: boolean;
}
const Button = styled.button<BTN>`
  ${GlobalMixin.button};
  height: 52px;
  width: 200px;
  font-size: 35px;
  &:active {
    transform: translateY(6px);
    box-shadow: none;
  }
`;

const ButtonAction = styled(Button)`
  ${(props) =>
    props.started &&
    css`
      transform: translateY(6px);
      box-shadow: none;
    `}
`;

const ButtonReset = styled(Button)`
  ${(props) =>
    props.started &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    `}
`;
