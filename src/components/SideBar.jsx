import React, {useState} from "react"
import './SideBar.css'

export function SideBar (props){
const [buttonClicked, setButtonClicked] = useState(false);


function handleClick() {
    if(buttonClicked){
        setButtonClicked(false)
    } else {
    setButtonClicked(true);
    }
  }

  function handleLocationChange(event) {
    props.onLocationChange(event.target.value);
  }

  function handleFindButton() {
    setButtonClicked(false); // close the sidebar when FIND button is clicked
    props.onFind(); // call the onFind prop function

  }
  
  if(buttonClicked){
    return (
      <>
      <button className="searchButton" onClick={handleClick}></button>
        <div className="backdrop">
            <input type='text' onChange={handleLocationChange} className="cityInput"></input>
            <button  onClick={handleFindButton} className="findButton">FIND</button>
        </div>
      </>
    )
  } else {
    return(
        <>
        <button className="searchButton" onClick={handleClick}></button>
        </>
    )
  }
  }

