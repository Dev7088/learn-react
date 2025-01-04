import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj= {
    name: "Dev",
    age: 22,
    sem: 8
  }

  let myArr = [10, 25, 70, 88]

  return (
    <>
      <h1 className='bg-green-500 p-4 rounded-xl mb-3'>Welcome to React with Tailwind</h1>
      <Card what="hello there" something={myObj} arr={myArr} btnText="Know more"/>
    </>
  )
}

export default App
