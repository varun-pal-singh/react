import {useState} from 'react';

function MyButton({count, onClick}){
    return (
        <button 
        style={{
            backgroundColor:"rgb(0, 0, 0)",
            color:"rgb(255, 255, 255)"
        }}
        onClick={onClick}
        >
            clicked {count} times
        </button>
    )
}



export default function SameParent(){
    const [count, setCount] = useState(0);
    
    function handleClick(){
        setCount(count + 1);
    }

    return (<div>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
    </div>)
}