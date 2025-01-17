import FortuneEven from "./components/FortuneEven.jsx";
import FortuneOdd from "./components/FortuneOdd.jsx";
import FortuneColors from "./components/FortuneColors.jsx";

import "./App.css";
import { useState } from "react";

function App() {
  const [fortuneState, setFortuneState] = useState("colors");

  function red() {
    event.preventDefault();
    setFortuneState("even");
    setTimeout(() => { setFortuneState("colors");}, 500);
    setTimeout(() => { setFortuneState("odd");}, 700);
    setTimeout(() => { setFortuneState("colors");}, 1200);
    setTimeout(() => { setFortuneState("even");}, 1400);

  }

  return (
    <>
      {fortuneState === "colors" && <FortuneColors />}
      {fortuneState === "even" && <FortuneEven />}
      {fortuneState === "odd" && <FortuneOdd />}

      <form className="fortuneSelect">
        <input></input>
        <button onClick={red}>go!</button>
      </form>
    </>
  );
}

export default App;
