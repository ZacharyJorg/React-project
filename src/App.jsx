import { useState } from 'react'
import './App.css'
import { SideBar } from './SideBar/SideBar'

const date = new Date()
console.log(date.getHours())

function App() {
  const [count, setCount] = useState(0)
//1-11 morning, 12-15 afternoon, 16-21 evening, 22-24 night
const message = date.getHours() >= 1 && date.getHours() <= 11
    ? "Good Morning"
    : date.getHours() >= 12 && date.getHours() <= 15
    ? "Good Afternoon"
    : date.getHours() >= 16 && date.getHours() <= 21
    ? "Good Evening"
    : "Good Night";
  
    return (
      <>
      <h1>{message}</h1>
      <SideBar />
      </>
    )
  }



export default App



