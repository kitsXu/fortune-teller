import './App.css'
import { useState } from 'react'

import lostPokers from "./images/lostPokers.jpeg"
import masterPoker from "./images/masterPoker.jpeg"
import pokeMuppets from "./images/pokeMuppets.jpeg"
import pokeMuppetsTwo from "./images/pokeMuppetsTwo.jpeg"
import pokeMuscle from "./images/pokeMuscle.jpeg"
import pokeOneH from "./images/pokeOneH.jpeg"
import pokeOneT from "./images/pokeOneT.jpg"
import pokeTwoTt from "./images/pokeTwoTt.jpeg"
import pokeTwoT from "./images/pokeTwoT.png"
import Button from './Button'




function App() {
  const [view, setView] = useState("");
  const [pageVisibility, setPageVisibility] = useState(true)

function buttonPress(){
  setView("Button");
  setPageVisibility(false);
}
  return (
    <> 
    {pageVisibility &&
<button className='pokeMe' onClick={buttonPress}>Poke Me ;)</button>}
{pageVisibility &&
  <div className='gallery'>
  <img className='image' src={lostPokers} alt="Lost Pokers" />
  <img className='image' src={masterPoker} alt="Master Pokers" />
  <img className='image' src={pokeMuppets} alt="Poke Muppets" />
  <img className='image' src={pokeMuppetsTwo} alt="Poke Muppets" />
  <img className='image' src={pokeMuscle} alt="Poke Muscle" />
  <img className='image' src={pokeOneH} alt="Poke 100" />
  <img className='image' src={pokeTwoTt} alt="Poke 2000" />
  <img className='image' src={pokeOneT} alt="Poke 100" />
  <img className='image' src={pokeTwoT} alt="Poke 2000" />
  </div>}
  <div>{view === "Button" && <Button />}
  {view === "App" && <App />}
  </div>
    </>
  )
}

export default App
