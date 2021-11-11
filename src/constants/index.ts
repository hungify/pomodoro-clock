import click from "../sounds/click.wav";
import press from "../sounds/button-press.wav";
import ticking from "../sounds/ticking.mp3";

interface Circle {
  radius: number;
  strokeWidth: number;
}

interface InitialState {
  initTimeLeft: number;
  initSessionLength: number;
  initBreakLength: number;
  initRingTime: number;
}

interface Sounds {
  click: string;
  press: string;
  ticking: string;
}

const circle: Circle = {
  radius: 180,
  strokeWidth: 5,
};

const initialState: InitialState = {
  initTimeLeft: 1500,
  initSessionLength: 25,
  initBreakLength: 5,
  initRingTime: 1500,
};

const sounds: Sounds = {
  click: click,
  press: press,
  ticking: ticking,
};
export { Circle, circle, Sounds, sounds, InitialState, initialState };
