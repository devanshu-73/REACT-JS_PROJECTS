import React, { useState } from 'react'

const Count = () => {
    const [counter, setCounter] = useState(0);
    // const [resetcount,setReset]=useState(0);
    return (
        <div>
            <button onClick={() => setCounter(counter => counter - 1)}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter => counter + 1)}>+</button>
            <div><button onClick={() => setCounter(0)}>Reset</button></div>
        </div>
    )
}

export default Count
