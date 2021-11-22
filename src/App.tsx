import "./App.css";
import PomodoroTimer from "./components/PomodoroTimer";
import { GlobalStyle } from "./styles/GlobalStyled";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PomodoroTimer />
    </div>
  );
}

export default App;
