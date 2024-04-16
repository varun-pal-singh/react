import React from 'react'

function Button({ color }) {
    console.log(`text-${color}-500`)
    return (
        <button className={`text-${color}-500 mr-4 p-4 bg-white`}>
            {color}
        </button>
    )
}

function ButtonTray() {
    function handleClick(color){
        document.body.style.backgroundColor = color
    }
    return (
        <div onClick={(evt) => handleClick(evt.target.innerText)}>
            <Button color={'red'} />
            <Button color={'blue'} />
            <Button color={'green'} />
            <Button color={'violet'} />
            <Button color={'yellow'} />
        </div>
    )
}

export default ButtonTray