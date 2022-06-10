import styled, { css } from "styled-components";
import { mediaDevices } from "../../styles/styledConstants";
import Button from "../Button";

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
  margin-top: 30px;
`;

const ButtonAction = styled(Button)`
  width: 200px;
  ${(props) =>
    props.started &&
    css`
      transform: translateY(6px);
      box-shadow: none;
    `}
`;

const ButtonReset = styled(Button)`
  width: 200px;
  ${(props) =>
    props.started &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    `}
`;
