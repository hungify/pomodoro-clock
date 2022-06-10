import { css } from "styled-components";
import { ColorConstants } from "./styledConstants";

export const GlobalMixin = {
  button: css`
    margin: 10px 0;
    padding: 0px 12px;
    border-radius: 4px;
    font-weight: bold;

    color: ${ColorConstants.BTN_COLOR};
    box-shadow: rgb(235 235 235) 0px 6px 0px;
    background-color: white;

    transition: color 0.5s ease-in-out 0s;
    cursor: grab;
    border: none;
  `,
  labelName: css`
    font-size: 25px;
    font-weight: 600;
    color: #0a1d37;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
