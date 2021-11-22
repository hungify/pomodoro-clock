import { css } from "styled-components";
import { ColorConstants } from "./styledConstants";

export const GlobalMixin = {
  button: css`
    margin: 20px 0px 0px;
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
};
