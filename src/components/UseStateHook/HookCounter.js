import React, { useState } from 'react'

function HookCounter() {

    // useState(0) = use the state and initialize to 0
    // count = current value of the state variable. It's initialzied to 0.
    // setCount = method that can update the state variable
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count {count}
            </button>
        </div>
    )
}

export default HookCounter
