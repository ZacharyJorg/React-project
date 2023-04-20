import { useState, useEffect } from 'react'
import './App.css'
import { SideBar } from './components/SideBar'


const apiKey = '508b36bc34955bd90ee82719d005dbbc'



const date = new Date()
console.log(date.getHours())

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Temecula')
  const [displayLocation, setDisplayLocation] = useState(location)
  const [showTemperature, setShowTemperature] = useState(false)
  const [inputLocation, setInputLocation] = useState('Temecula') 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [apiUrl]);

  console.log(data)
  const temperature = ((data?.main?.temp- 273.15) * 9/5 + 32).toFixed()
  console.log(data?.main?.temp ?? "Loading...")
//1-11 morning, 12-15 afternoon, 16-21 evening, 22-24 night
const greeting = date.getHours() >= 1 && date.getHours() <= 11
    ? "Good Morning"
    : date.getHours() >= 12 && date.getHours() <= 15
    ? "Good Afternoon"
    : date.getHours() >= 16 && date.getHours() <= 21
    ? "Good Evening"
    : "Good Night";

    function handleLocationChange(newLocation) {
      setInputLocation(newLocation); // update the input location
    }

    function handleFindButton() { // add new function
      setLocation(inputLocation); // update the location
      setDisplayLocation(inputLocation);
      setShowTemperature(true);
    }

  
    return (
      <>
      <h1 className='greeting'>{greeting}</h1>
      <p className='location'>{displayLocation}</p>
      {data ? (
      <p className='temp'>{temperature ?? "Loading..."}</p>
    ) : (
      <p className='temp'>Loading...</p>
    )}
      <SideBar location={inputLocation} onLocationChange={handleLocationChange} onFind={handleFindButton} />
      </>
    )
  }



export default App



