import React, {useState} from "react"

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
      <div>
        <button style={{color: 'green'}} onClick={handleClick}>Find New City</button>
      </div>
    )
  } else if(buttonClicked == true) {
    return(
        <>
        <button style={{color: 'green'}} onClick={handleClick}>Find New City</button>
        <Nav />
        </>
    )
  }
  }


export function Nav (){
    return (
        <>
            <input type='text'></input>
            <button>FIND</button>

        </>
    )
}