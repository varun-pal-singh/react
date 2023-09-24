export default function MyButton(){
    function handleClick(){
        alert(`You clicked this button!`);
        console.log("clicked");
    }

    return (
        <button onClick={() => handleClick()}>
            Click me
        </button>
    )
}