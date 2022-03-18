import React, { useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(0)
    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
};

export default Test;