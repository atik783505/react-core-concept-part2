import { useState } from "react"

export default function Count (){
    const [count,setCount] = useState(0)
     
    const handleEvent = () => {
        const newNum = count+1;
        setCount(newNum)
    }

    const countStyle ={
        border: '2px solid green',
        padding: '20px 150px'
    }
    return(

        <div style={countStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleEvent}>Add: </button>
        </div>
    )
}