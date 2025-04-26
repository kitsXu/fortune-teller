import { useEffect } from "react"
import tonySolah from './images/tonySolah.png'
import './App.css'

export default function Button() {

  useEffect(() => {
    const timer = setTimeout(() => {
      alert('Were you expecting something dirty? Maybe in your email later ;)')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <> 
  <div className='title'>Holy Pokes!!!!</div>
  <div className='subTitle'>LEVEL 3000</div>
  <img className='tonySolah' src={tonySolah} />
    </>
  )
}