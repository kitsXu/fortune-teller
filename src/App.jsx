import FortuneEven from "./components/FortuneEven.jsx";
import FortuneOdd from "./components/fortuneOdd.jsx";
import FortuneColors from "./components/fortuneColors.jsx";

import "./App.css";
import { useState } from "react";

function App() {

  const [fortuneState, setFortuneState] = useState("colors");

function red() {
  setFortuneState("even");
  setFortuneState("colors");
  setFortuneState("odd");
}

  return (
    <>
    {fortuneState === "colors" && <FortuneColors />}
    {fortuneState === "even" && <FortuneEven />}
    {fortuneState === "odd" && <FortuneOdd />}

    <form>
      <input></input>
      <button onClick={red}>go!</button>
    </form>

    </>
  );
}

export default App;
