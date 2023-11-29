import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCard from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: 'Vineet',
    age: 40
  }

  let myArr = [40, 50, 60]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Chai aur React with Tailwind and Props</h1>
      <MyCard channelName="chaiaurreact" btnText="Click me" />
      <MyCard channelName="Vineet Kulkarni"/>
    </>
  )
}

export default App
