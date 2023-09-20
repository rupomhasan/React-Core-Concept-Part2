import { useState } from "react";
 const setStyle = {
        border :'2px solid red',
        margin : '14px',
        padding : '10px',
        borderRadius:'20px' 

    }
export default function Player() {
    
    const [count, setCount] = useState(11)

function HandleAdd () {
    const newCount = count + 1 ;
    setCount (newCount)
}
 const HandleRemove = () => {
    const newCount = count - 1 ;
    setCount(newCount)
 }
    return (
        <div style={setStyle}>
            <h3>Player : {count} </h3>
            <button onClick={HandleAdd}>Add Player</button>
            <button onClick={HandleRemove}>Remove Player</button>
        </div>
    )
}