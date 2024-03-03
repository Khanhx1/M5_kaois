import {useState} from "react";

function useIncrement(addAmount) {

    const [count, setCount] = useState(0);


    const increase = () => {
        setCount((prev) => prev + addAmount);
    }

    return [count, increase];
}

export function Counter1() {
    const [count, setCount] = useIncrement(1);

    return (
        <>
        <p>{count}</p>
            <button onClick={() => setCount()}>add 1</button>
        </>
    )
}

export function Counter2() {
    const [count, setCount] = useIncrement(2);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount()}>add 2</button>
        </>
    )
}