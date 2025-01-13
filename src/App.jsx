import { useState } from 'react';
import fortuneTellerEven from './images/fortuneEven.png/';
import './App.css'

function App() {

  return (
    <>
    <div className='topSquareWrapper'>
      <div className='squareOne'></div>
      <div className='squareTwo'></div>
      </div>
      <div className='bottomSquareWrapper'>
      <div className='squareThree'></div>
      <div className='squareFour'></div>
      </div>
      <div>
        <img className='fortuneImage' src={fortuneTellerEven}></img>
      </div>
             </>
  )
}

export default App
