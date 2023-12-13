import {useState} from 'react';

function handleClick(){
    setCount(count + 1);
}

export default function MyCountButton(){
    const [count, setCount] = useState(0);

    return (
        <button  onClick={() => setCount(count + 1)}>
            Clicked {count} times
        </button>
    );
}
