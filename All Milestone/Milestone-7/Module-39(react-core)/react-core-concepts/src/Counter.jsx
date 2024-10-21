import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const countAdd = count + 1;
        setCount(countAdd);
    }
    const handleReduce = () => {
        const countReduce = count - 1;
        setCount(countReduce);
    }


    return (
        <div style={{ border: '2px solid red', padding: '15px' }}>
            <h3>Counter: {count}</h3>

            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}