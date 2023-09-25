import {useState} from "react";

export default function MyParentCountBtn(){
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton count={count} handleClick={handleClick} />
            <MyButton count={count} handleClick={handleClick} />
        </div>
    )
}

function MyButton(props){
    return(
        <button className="px-2 py-1 m-2 bg-black text-white rounded" onClick={props.handleClick}>The button was clicked {props.count} times</button>
    )
}