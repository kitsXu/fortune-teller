import { useEffect } from "react"

export default function Button() {

  useEffect(() => {
    const timer = setTimeout(() => {
      alert('were you looking for something dirty? Maybe in your email later ;)')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <> 
  <div className='title'>Holy Pokes!!!!</div>
  <div className='subTitle'>LEVEL 3000</div>
    </>
  )
}