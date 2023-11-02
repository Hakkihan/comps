import { useState, useEffect } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect((count) => {

        console.log(count);

    }, [count]); //[count] here means that the useEffect will rerun whenever the count piece of state changes

    const increment = () => {
        setCount(count +1);
    };

    return {
        count: count,
        increment : increment
    }
}

export default useCounter