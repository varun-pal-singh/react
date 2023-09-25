function MyButton(){
    return (
        <button className="border-black m-2 bg-orange-300 p-2 rounded">This is a button</button>
    )
}

export default function MyApp(){
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
        </div>
    )
}