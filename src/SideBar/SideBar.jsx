import React, {useState} from "react"
import './SideBar.css'

export function SideBar (){
const [buttonClicked, setButtonClicked] = useState(false);

function handleClick() {
    if(buttonClicked == true){
        setButtonClicked(false)
    } else if (buttonClicked == false){
    setButtonClicked(true);
    }
  }
  if(buttonClicked == false){
    return (
      <>
        <button className="searchButton" onClick={handleClick}>Search</button>
      </>
    )
  } else if(buttonClicked == true) {
    return(
        <>
        <button className="searchButton" onClick={handleClick}>Search</button>
        <Nav />
        </>
    )
  }
  }


export function Nav (){
    return (
        <>
            <input type='text' className="cityInput"></input>
            <button className="findButton">FIND</button>
        </>
    )
}