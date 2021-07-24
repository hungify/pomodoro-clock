import click from '../sounds/click.wav';
import press from '../sounds/button-press.wav';
import ticking from '../sounds/ticking.mp3';

export const circle = {
  radius: 180,
  strokeWidth: 5,
};

export const initialState = {
  initTimeLeft: 1500,
  initSessionLength: 25,
  initBreakLength: 5,
  initRingTime: 1500,
};

export const sounds = {
  click: click,
  press: press,
  ticking: ticking,
};
