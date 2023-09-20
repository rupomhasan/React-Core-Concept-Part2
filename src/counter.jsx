import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0)
    const HandleAdd=() => {
        const newCount = count+1;
        setCount(newCount)
    }
    const HandleReduce =() => {
        const newCount = count - 1;
        setCount (newCount)
    }
return (
    <div>
        <h3> counter :{count}</h3>
        <button onClick={HandleAdd}>Add</button>
        <button onClick={HandleReduce}>Reduce</button>
    </div>
)
}