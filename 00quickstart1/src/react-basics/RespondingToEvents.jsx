function handleClick(){
    alert(`You clicked me!`);
}

export default function MyButton2(){
    return (
        <button key="btn" onClick = {() => alert(`You clicked me!`)}>
            Click me
        </button>
    );
}