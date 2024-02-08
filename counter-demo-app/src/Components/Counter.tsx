import React, { useState } from "react"


export const Counter:React.FC = () =>{
    const [count, setCount] = useState<number>(0);

    const incrementCount = () =>{
        setCount(prev=>prev+1);
    }

    const decrementCount = () =>{
        setCount(prev=>prev-1);
    }


    
    
    
    return (
        <div>
            <p>Count: {count}</p>
            {count==50 && <p style={{color:"red"}}>You have reached your max limit!</p>}
            <button disabled={count===50} onClick={incrementCount}>Increment</button>
            <button disabled={count===0} onClick={decrementCount}>Decrement</button>
            
        </div>
    )
}