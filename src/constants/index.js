import click from '../sounds/click-1114.wav';
import press from '../sounds/button-press.wav';
import ticking from '../sounds/ticking.mp3';

export const circle = {
  radius: 180,
  strokeWidth: 5,
};

export const initialState = {
  initTimeLeft: 12,
  initSessionLength: 2,
  initBreakLength: 2,
  initRingTime: 1,
};

export const sounds = {
  click: click,
  press: press,
  ticking: ticking,
};
