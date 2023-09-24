import { useState } from "react";

export default function MyCountButton(){
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button className=" bg-blue-500 rounded px-2 py-1 m-2" onClick={() => handleClick()}>Clicked {count} times</button>
    )
}