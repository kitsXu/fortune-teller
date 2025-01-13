import { useState} from 'react';
import fortuneTellerEven from './images/fortuneEven.png/';
import fortuneOdd from './images/fortuneOdd.png/';
import './App.css'

function App() {
  const [evenVisibility, setEvenVisibility] = useState(true);
  const [oddVisibility, setOddVisibility] = useState(false);

  function showHide () {
    if (evenVisibility === true)
    setEvenVisibility(false)
  else setEvenVisibility(true);
  if (oddVisibility === false)
    setOddVisibility(true);
  else setOddVisibility(false);
    console.log("SHOW-HIDE")
  }

  return (
    <>
    {/* <div className='topSquareWrapper'>
      <div className='squareOne'></div>
      <div className='squareTwo'></div>
      </div>
      <div className='bottomSquareWrapper'>
      <div className='squareThree'></div>
      <div className='squareFour'></div>
      </div> */}
      <div onClick={showHide}>
        {evenVisibility && <img className='fortuneImageEven' src={fortuneTellerEven}></img>}
        {oddVisibility && <img className='fortuneImageOdd' src={fortuneOdd}></img>}

      </div>
             </>
  )
}

export default App
