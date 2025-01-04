import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(10)
  // let counter = 0

  const increaseValue = () =>{
    if(counter < 20)
      setCounter(counter + 1)    
  }

  const decreaseValue = () => {
    if(counter > 0)
      setCounter(counter - 1)
  }

  return (
    <>
      <h1>welcome to the Counter</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={increaseValue}>Increase + </button> 
      
      <button onClick={decreaseValue}>Decrease - </button>
    </>
  )
}

export default App
