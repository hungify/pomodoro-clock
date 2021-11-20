export const formatTime = (timeLeft: number) => {
  let minutes: number | string = Math.floor(timeLeft / 60);
  let seconds: number | string = timeLeft % 60;
  minutes = minutes < 10 ? ("0" + minutes).slice(-2) : minutes;
  seconds = seconds < 10 ? ("0" + seconds).slice(-2) : seconds;
  return `${minutes}:${seconds}`;
};
